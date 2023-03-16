class Section {
    constructor({ items, renderer }, selector) {
        this._items = items;
        this._container = document.querySelector(selector);
        this._rendere = renderer;
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this._items.forEach(item => {
            this._renderer(item, this._container);
        });
    }
}