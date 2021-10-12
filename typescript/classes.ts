class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string){}
}
// ============================

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor(){
        this.go()
    }

    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string):void {
        this.voice = voice
    }
}

const cat = new Cat()

cat.setVoice('test')
console.log(cat.color)
// cat.voice

// ==========================

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class  AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return 'This is info'
    }
}

