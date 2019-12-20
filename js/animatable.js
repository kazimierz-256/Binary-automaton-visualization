class Animatable {
    constructor(updateAction, initAction, destroyAction, subject) {
        this.updateAction = updateAction;
        this.initAction = initAction;
        this.destroyAction = destroyAction;
        this.subject = subject;
    }
    init(scene, appSettings) {
        if (this.initAction != undefined)
            this.initAction(scene, appSettings);
    }
    update(t, appSettings, renderer, scene) {
        if (this.updateAction != undefined)
            this.updateAction(t, appSettings, renderer, scene);
    }
    destroy(scene) {
        if (this.destroyAction != undefined)
            this.destroyAction(scene);
    }
    subject() {
        if (this.subject != undefined)
            this.subject();
    }
}