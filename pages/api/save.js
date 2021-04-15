import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1ZxXT3tK_4TVO_SXTOY4146G-m4hINNYRUzvEH9NfIaI')

export default async(req, res) => {

    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Sugestao: data.Sugestao,
            Cupom: '111111',
            Promo: '10% OFF'
        })
        res.end(req.body)
    }

    catch (err) {
        console.log(err)
        res.end('error')
    }
}