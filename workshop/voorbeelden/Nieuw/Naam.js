function voorNaam() {
    return 'Voornaam';
}

function achterNaam() {
    return 'Achternaam';
}

function samengesteldeNaam() {
    return `${voorNaam()} ${achterNaam()}`;
}

describe('Gebruiker', () => {

    it('Voornaam', () =>  {
        expect(voorNaam()).toBe('Voornaam');
    });

    it('Achternaam', () =>  {
        expect(achterNaam()).toBe('Achternaam');
    });

    it('Samengestelde naam', () =>  {
        expect(samengesteldeNaam()).toBe('Voornaam Achternaam');
    });

});