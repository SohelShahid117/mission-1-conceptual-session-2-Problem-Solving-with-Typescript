"use strict";
{
    //OOP
    //class---------->property-------->method
    //OOP er pillar 4t.VVI---->  
    /*
    1.inheritance--->ParentClass---->ChildClass
    babar j property method,chele paiche setai holo inheritance.
    eg:akti garir onekgolo property,method takbe.ai property,method bibinno garite(bus,cng,bike,car...) takbe setai holo inheritance
    */
    /*
    2.abstraction--->bahaddarhat teke bus e utlam & pore GEC namlam but er modde bus er engine kivabe kaj korlo amar kisoi jana laglo na Ortat bitorer kaj t ki holo amar janar dorkar nai sei bitorer kaj t holo abstraction.
    page print dilam & printing page nilam er modde printer kibabe kaj korlo kisoi janlam na.ei j printer bitore j kaj golo korlo setai holo abstraction.
    kaoke call dilam se receive korlo & kothao bollam but mobile,network agolor functionality kisoi janina ,ai j internal kaj jegolo holo setai hoilo abstarction
    */
    /*
    3.encpsulation:kono akta jiniske alada kore fela.se internally kaj korbo but baire take dekabena.bairer jogot teke take alada kore fela.
    say,ami valo programmer hobo tai ami 6 month er jonno griho bondi hoye gelam,mobile off kore dilam.ai j ami bairer jogot teke separated holam atai holo encapsulation.
    */
    /*
    4.polymorphism:akta jinis bibinno rope j achoron kore takei bole bohoropi || polymorphism.ami kotao student,kotao developer,kotao electrical engr,kotao bsnsman,kotao chele,kotao jamai,sontander kase baba atai holo polymorphism.ami akjon but rop t amar bibinno jaigai bibinno hosse setai holo polymorphism.
    */
    class MusicalInstrument {
        constructor(name) {
            this.name = name;
        }
        //uporer property golo raw material r constructor t hobe machine
        //raw material machine er bitor dokie product ready kora hoi
        play() {
            console.log(`now playing the ${this.name}`);
        }
    }
    class Guiter extends MusicalInstrument {
        constructor() {
            super("Guiter");
        }
        tune() {
            console.log(`tune the ${this.name}`);
        }
    }
    class Piano extends MusicalInstrument {
        constructor() {
            super("Piano");
        }
        openLid() {
            console.log(`opening the lid ${this.name}`);
        }
    }
    const guiterist = new Guiter();
    guiterist.play();
    guiterist.tune();
}
