const FriendlyError = require('./friendly');

/**
 * Has a descriptive message for a command not having proper format
 * @extends {FriendlyError}
 */
class CommandFormatError extends FriendlyError {
  /**
   * @param {CommandoMessage} msg - The commad message the error is for
   */
  constructor(msg) {
    super(
      `Invalid command usage. Use ${msg.anyUsage(
        `help ${msg.command.name}`,
        msg.guild ? undefined : null,
        msg.guild ? undefined : null,
      )} to check out how to use the command!`,
    );
    this.name = 'CommandFormatError';
  }
}

module.exports = CommandFormatError;
