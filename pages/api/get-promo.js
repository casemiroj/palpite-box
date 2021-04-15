import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1ZxXT3tK_4TVO_SXTOY4146G-m4hINNYRUzvEH9NfIaI')

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        
        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A2:B2')
        
        const mostrarPromocaoCell = sheet.getCell(1, 0)
        const textoCell = sheet.getCell(1, 1)
    
        res.end(JSON.stringify({
            showCoupon: mostrarPromocaoCell.value === 'Verdadeiro',
            message: textoCell.value
        }))
    }

    catch (err) {
        res.end(JSON.stringify({
            showCoupon: mostrarPromocaoCell.value === 'Falso',
            message: ''
        }))
    }    
}