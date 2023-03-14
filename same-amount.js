function sameAmount(str,re1,re2) {
    const reg1 = new RegExp(re1,'g')
    const reg2 = new RegExp(re2,'g')
    const resReg1 = str.match(reg1)
    const resReg2 = str.match(reg2)
    if((resReg1 != null && resReg2!= null)&&(resReg1.length === resReg2.length)) {
        return true
    }
    return false
}