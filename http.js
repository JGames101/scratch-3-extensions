/*
    HTTP Requests in JavaScript
*/

var httpExt = function () {
};

/**
 * @return {object} This extension's metadata.
 */
httpExt.prototype.getInfo = function () {
    return {
        id: 'httpExt',

        name: 'HTTP Requests',

        blocks: [
            {
                opcode: 'httpExt-set',
                blockType: Scratch.BlockType.REPORTER,
                blockAllThreads: false,
                text: 'GET [VALUE]',
                func: 'request',
                arguments: {
                    VALUE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'https://jgames101.github.io/scratch-3-extensions/http.js'
                    }
                }
            }
        ],
    };
};

/**
 * Implement myReporter.
 * @param {object} args - the block's arguments.
 * @property {number} LETTER_NUM - the string value of the argument.
 * @property {string} TEXT - the string value of the argument.
 * @returns {string} a string which includes the block argument value.
 */
httpExt.prototype.set = function (args) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( 'GET', args.VALUE, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
};


Scratch.extensions.register(new httpExt());