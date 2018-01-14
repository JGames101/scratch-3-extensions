/*
    Basic JS blocks
*/

var basicJS = function () {
};

/**
 * @return {object} This extension's metadata.
 */
basicJS.prototype.getInfo = function () {
    return {
        id: 'basicJS',

        name: 'Basic JS',

        blocks: [
            {
                opcode: 'basicJS-alert',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: true,
                text: 'Alert [ALERT]',
                func: 'alert',
                arguments: {
                    ALERT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Hello, World!'
                    }
                }
            }
        ],
    };
};


basicJS.prototype.alert = function (args) {
    alert(args.ALERT);
};


Scratch.extensions.register(new basicJS());