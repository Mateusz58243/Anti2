// 0. hozz létre egy txt változót és add meg a változó értékét - legalább 20 karakterből álljon
txt = "abcdefghijklmnopqrstuvwxyz";
// 1. Írasd ki a konzolba az első 5 karaktert
console.log(txt.substring(0, 5));
// 2. Írasd ki a konzolba a 3. tól a 8-ik karakterig
console.log(txt.substring(2, 8));
// 3. Írasd ki a konzolba az 5. karaktertől a végéig
console.log(txt.substring(4));
// 4. Írasd ki a konzolba az 5. karaktertől 6 karakter hosszan
console.log(txt.substr(4, 6));
// 5. Írasd ki a konzolba a txt-t nagybetűkkel
console.log(txt.toUpperCase());
// 6. Írasd ki a konzolba a txt változót, hogy minden második karakter nagybetű legyen
let newtxt = "";
for (let i = 0; i<txt.length; i++)
{
    if(i % 2 ==0)
    {
        newtxt += txt[i].toUpperCase();
    }
    else
    {
        newtxt += txt[i];
    }
}
console.log(newtxt);
// 7. Írasd ki a konzolba a txt-t úgy, hogy minden "e" karakter "E" legyen
console.log(txt.replaceAll("e","E"));
// 8. Készíts tömböt a txt-ből az "e" betűk szerint elválasztva. Ítasd ki a tömböt.
console.log(txt.split("e"));