module.exports = ({fullname, email, nic, courseName }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 2px solid black;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: left;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0" style="font-family:verdana">
                <tr class="top">
                   <td colspan="2">
                      <table style="font-family:verdana">
                         <tr>
                            <td class="title"><img  src="../images/longpic.png"
                               style="width:100%; max-width:156px;"></td>
                            <td  style="text-align:right">
                               Date: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table style="font-family:verdana">
                         <tr>
                            <td>
                              Lecturer ID: ${fullname}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">

                </tr>
                <tr class="item">
                   <td>Lecturer Last Name:</td>
                   <td>${email}</td>
                </tr>
                <tr class="item">
                   <td>Nic Number:</td>
                   <td>${courseName}</td>
                </tr>
                <tr class="item">
                   <td>Date Of Birth:</td>
                   <td>${nic}</td>
                </tr>
                </tr>
             </table>
             <br />
          </div>
       </body>
    </html>
    `;
};