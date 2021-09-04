function validaAuthAPI(key) {
    const chave = banco(chave);
    if(key === chave){
        return true;
    }else{
        return false;
    }
}

module.exports = validaAuthAPI;