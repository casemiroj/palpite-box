import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1ZxXT3tK_4TVO_SXTOY4146G-m4hINNYRUzvEH9NfIaI')

export default async(req, res) => {

    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A2:B2')
        
        const mostrarPromocaoCell = sheetConfig.getCell(1, 0)
        const textoCell = sheetConfig.getCell(1, 1)

        let Cupom = ''
        let Promo = ''

        if(mostrarPromocaoCell.value === 'Verdadeiro') {
            //Gerar Cupom
            Cupom = 'Temporario'
            Promo = textoCell.value
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Sugestao: data.Sugestao,
            Nota: 5,
            'Data de Preenchimento': moment().format('DD/MM/YYYY, HH:mm'),
            Cupom,
            Promo
        })
        res.end(req.body)
    }

    catch (err) {
        console.log(err)
        res.end('error')
    }
}