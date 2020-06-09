const {GoogleSpreadsheet} = require("google-spreadsheet");
const doc = new GoogleSpreadsheet("1HxTJrDrdErdQC5ctSgiU8LBoQHfVioxO-EWk-4PHZLU");

async function accessSpreadsheet(name, email, text) {
    await doc.useServiceAccountAuth(require('../creds-from-google.json'));
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = await doc.sheetsByIndex[0]
        
    await sheet.addRow({ name: name, email: email, text: text});
    


}

export default accessSpreadsheet;