class Section {
    constructor({ items, renderer }, containerSelector, api) {
        this._items = items;
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
        this._api = api
    }

    saveItem(data) {
        this._api
        .addCard({name: data.name, link: data.link})
        .then((item) => {
            const cardElement = this._renderer(item, this._container)
            return cardElement;
        })
        .catch((err) => console.log(err))
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this._items.forEach(item => {
            this._renderer(item, this._container);
        });
    }

    setItems(items){
        this._items = items;
    }
};

export default Section;