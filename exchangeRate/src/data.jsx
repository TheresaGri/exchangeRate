 export async function exchangeData(currency1, currency2) {
  const url = `https://api.exchangerate.host/convert?from=${currency1}&to=${currency2}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

