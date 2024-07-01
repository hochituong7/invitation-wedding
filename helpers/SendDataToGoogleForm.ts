import { CustomerSubmitType } from "@/types/customer-submit"

export function sendDataToGoogleForm(data: CustomerSubmitType) {
  console.log("sheet: ", data)

  callGoogleFormAppscript(data)
}

// eslint-disable-next-line no-unused-vars
async function callGoogleFormAppscript(data: CustomerSubmitType) {
  var url = ""
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    mode: "no-cors",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  console.log("res", res)
}
