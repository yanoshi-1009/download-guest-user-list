javascript:(function()%7B(async()%3D%3E%7B%22use%20strict%22%3Bif(!%2F%5Ehttps%3A%5C%2F%5C%2F.%2B%5C.cybozu%5C.com%5C%2Fk%2F.test(location.href))return%20void%20window.alert(%22%E3%81%93%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%A7%E3%81%AF%E5%AE%9F%E8%A1%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%9B%E3%82%93%E3%80%82%22)%3Bconst%20e%3Ddocument.createElement(%22script%22)%3Be.src%3D%22https%3A%2F%2Fcdnjs.cloudflare.com%2Fajax%2Flibs%2FPapaParse%2F5.3.2%2Fpapaparse.min.js%22%2Cdocument.body.appendChild(e)%3Btry%7Bconst%20e%3Dawait%20kintone.api(kintone.api.url(%22%2Fk%2Fapi%2Fguest%2Flist.json%22)%2C%22POST%22%2C%7B%7D).then((e%3D%3Ee.result.items))%2Ct%3DPapa.unparse(e)%2Ca%3Dnew%20Blob(%5Bt%5D%2C%7Btype%3A%22text%2Fcsv%22%7D)%2Cs%3Ddocument.createElement(%22a%22)%3Bs.href%3DURL.createObjectURL(a)%2Cs.download%3D%22guests.csv%22%2Cs.click()%7Dcatch(e)%7Bwindow.alert(%60%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E6%83%85%E5%A0%B1%E3%81%AE%E5%8F%96%E5%BE%97%E3%81%AB%E5%A4%B1%E6%95%97%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82%5Cn%24%7Be.message%7D%60)%7D%7D)()%3B%7D)()