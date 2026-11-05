import sharp from 'sharp'
import { mkdirSync } from 'node:fs'

const origem = 'src/assets/logo-supersonic.svg'
const saida = 'public/icons'
mkdirSync(saida, { recursive: true })

// O SVG tem margem própria em volta do desenho: trim() corta essa margem antes de
// dimensionar, senão o logotipo fica minúsculo no ícone.
// larguraFracao = largura do logotipo em relação ao ícone. No maskable, o Android recorta
// em círculo (área segura = círculo de 80%): um logotipo 2,8:1 cabe até ~75% de largura.
async function gerarIcone(tamanho, nome, larguraFracao) {
  const largura = Math.round(tamanho * larguraFracao)
  const recortado = await sharp(origem, { density: 200 }).trim().toBuffer()
  const logo = await sharp(recortado)
    .resize(largura, tamanho, { fit: 'inside', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toBuffer()

  await sharp({
    create: {
      width: tamanho,
      height: tamanho,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toFile(`${saida}/${nome}`)

  console.log(`gerado ${saida}/${nome}`)
}

await gerarIcone(192, 'icon-192.png', 0.9)
await gerarIcone(512, 'icon-512.png', 0.9)
await gerarIcone(512, 'icon-maskable-512.png', 0.72)
