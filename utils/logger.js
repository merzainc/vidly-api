const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: 'YY-MM-DD HH:mm' }),
        format.json(), format.prettyPrint()),
    transports: [
        new transports.File({ filename: 'logfile.log', level: 'info' }),
        new transports.Console({
            format: format.combine(
                format.prettyPrint(),
                format.timestamp({ format: 'YY-MM-DD HH:mm' }),
                format.colorize({ all: true })
            )
        })
    ]
});
