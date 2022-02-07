export function convertMoneyInReal(money: number) {
    const valueFormat = Number(money).toFixed(2).toString().replace(/\./, ',');
    return `R$ ${valueFormat}`;
}