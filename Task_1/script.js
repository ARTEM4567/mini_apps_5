class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
        let img = document.createElement('img');
        img.setAttribute('src', this.imgUrl);
        this.html = img;
        document.body.style.backgroundColor = 'black';
        this.render();
      // метод должен создать тег img
      // вложить в него src картинки (this.imgUrl)
      // и записать в this.html
      // + дергаем render
  
      // + странице должен залится фон черным
    }
    
    render() {
        this.html.style.position = 'fixed';
        this.html.style.top = `${this.top}px`;
        this.html.style.left = `${this.left}px`;
        this.html.style.width = `${this.width}px`;
        document.body.appendChild(this.html);
      // метод должен отрисовать изображение (this.html) на странице
      // применить фиксированное позиционирование
      // использовать this.top и this.left для указания позиции
      // использовать this.width для указания ширины
    }
  
    moveUp() {
        this.top = this.top - 20;
        this.render();
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся ВЫШЕ
      // на 20px
      // + дергаем render
    }
    moveDown() {
        this.top = this.top + 20;
        this.render();
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся НИЖЕ
      // на 20px
      // + дергаем render
    }
    moveLeft() {
        this.left = this.left - 20;
        this.render();
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ЛЕВЕЕ
      // на 20px
      // + дергаем render
    }
    moveRight() {
        this.left = this.left + 20;
        this.render();
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ПРАВЕЕ
      // на 20px
      // + дергаем render
    }
  }
  
  const imgUrl = 'https://bit.ly/2tcDito';
  let mfLogotip = new Logo(imgUrl);
  console.log(mfLogotip);
  
  // запускаем наше микро-приложение
  mfLogotip.init();
  
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  // something else, чтобы всё работало