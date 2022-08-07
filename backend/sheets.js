const {google} = require('googleapis')
const auth = new google.auth.GoogleAuth({
       keyFile: "sheets_credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});

// Create client instance for auth
let getClient = async () => {
    let client = await auth.getClient();
    return client
}

const spreadsheetid = "1X3Wutd0RTCtTyotSaElAil4Edk1ECCmgGyuKO0SOEtw"
let getSheets = async (rowData) => {
    let client = getClient()
    const sheets = google.sheets({ version: 'v4', auth: client });

    try{
        await sheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: "Sheet1!A:E",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [rowData.productid, rowData.height, rowData.Shade, rowData.decorations, rowData.Price, rowData.user]
                ]
            }
        })
        return "Entered Selection"
    }
    catch (error){
        console.error();
        return "Error Occured on Selection Entry"
    }

}
module.exports = { getSheets }