class VueInputParent{
    async getParent(input){
        const parent = await input.parentElement();
        const parent2 = await parent.parentElement();
        const parent3 = await parent2.parentElement();
        const parent4 = await parent3.parentElement();

        return parent4;
    }
}

module.exports = new VueInputParent();