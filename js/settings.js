class settings {
    constructor(speedup) {
        this.n = 3;
        this.speedup = speedup;
        this.accelX = 0.0;
        this.accelY = 0.0;
        this.accelZ = 0.0;
        this.eps = 1e-4;
        this.previousMaximumConsideringDepth = 1;
        this.maximumConsideringDepth = 1;
        this.maxDistance = 1;
        this.targetFPS = 120;
        this.exploratoryFOV = 75;
        this.focusingFOV = 75;
        this.showPowerAutomaton = false;
        // parameters
        this.shineLights = false;
        this.daytime = 0.15;
        this.probabilityOfUpdate = 1.0;
        // animation
        this.animationStartTime = 0;
        this.creationStartTime = 0;
        this.flatteningEasing = "easeOutExpo";
        this.flatteningForceTimeout = 40000;
        this.flatteningForceFraction = 0;
        this.threeDimForceFraction = 0;
        this.animating = false;
        this.maxSpeedSquared = 0.0;
        this.maxPermissibleSpeedSquared = 200;
        this.deltaTSlowdown = 1;
        this.quality = 3;
        this.repelArrows = false;

        this.transitionFocusFraction = 1.0;
        this.distanceFocusFraction = 1.0;
        this.currentVertexFocus = -1;
        this.previousVertexFocus = -1;

        this.smoothOutEasing = "easeOutExpo";
        this.moveFocusTimout = 1800;
        this.travelEasing = "easeInOutCubic";
        this.zoomEasing = "easeOutSine";
        this.zoomTimeout = 100;

        this.targetStringLength = 0.4;

        // UI specific
        this.maxBlur = 100;
        this.smallBlur = 10;
        this.blurTimeout = 2500;

        this.highlighted = 0.3;
        this.withoutHighlight = 1.0;
        this.highlightTimeout = 200;
        this.dehighlightTimeout = 300;

    }
    recomputeForces(forceStrength) {
        this.forceStrength = forceStrength;
        this.repellingConstant = -200 * this.forceStrength;
        this.arrowRepellingConstant = -0.01 * this.forceStrength;
        this.stringConstant = 5 * this.forceStrength;
        this.uniqueStringConstant = 2 * this.stringConstant;
        this.friction = 2 * this.forceStrength;
        this.planarityConstant = this.forceStrength * 30;
        this.maximumForce = 150 * this.forceStrength;
    }
    registerAction(action) {
        this.animationStartTime = Date.now();
        if (action != undefined)
            action();
    }
}