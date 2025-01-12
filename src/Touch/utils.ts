import { Log } from "@utils";
import { isString } from "underscore";


export function sliceTextAndNumber(input: string) {
    let text = "";
    let number = "";
    let mid: number | boolean = false
    for (let i = 0; i < input.length; i++) {
        const currentChar = input[i];
        if (!isNaN(parseInt(currentChar)) && mid == false) {
            mid = i
        }
    }
    if (mid) {
        text = input.slice(0, mid)
        number = input.slice(mid)
    }
    // Log.d('mid', { mid, text, number })
    return {
        text: mid ? text : null,
        number: mid ? Number(number) : null,
    };
}
export function replaceAll(str = '', search = '', replacement = '') {
    return str.replace(new RegExp(search, 'g'), replacement);//[g] ~~ search global

}