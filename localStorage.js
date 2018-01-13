/*
    My LocalStorage extension ported to Scratch 3.
*/

var lsExt = function () {
};

/**
 * @return {object} This extension's metadata.
 */
lsExt.prototype.getInfo = function () {
    return {
        id: 'lsExt',

        name: 'localStorage',

        blocks: [
            {
                opcode: 'lsExt-set',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'set [NAME] to [VALUE]',
                func: 'set',
                arguments: {
                    NAME: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Highscore'
                    },
                    VALUE: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0
                    }
                }
            },
            {
                opcode: 'lsExt-get',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'get [NAME]',
                func: 'get',
                arguments: {
                    NAME: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Highscore'
                    }
                }
            }
        ]
    };
};

/**
 * Implement myReporter.
 * @param {object} args - the block's arguments.
 * @property {number} LETTER_NUM - the string value of the argument.
 * @property {string} TEXT - the string value of the argument.
 * @returns {string} a string which includes the block argument value.
 */
lsExt.prototype.set = function (args) {
    localStorage.setItem(args.NAME, args.VALUE);
};

lsExt.prototype.get = function (args) {
    return localStorage.getItem(args.NAME);
};


Scratch.extensions.register(new lsExt());