/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   logger.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/01 15:38:47 by Julien de M       #+#    #+#             */
/*   Updated: 2018/06/14 02:07:29 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const winston = require('winston');
const moment = require('moment-timezone');

moment.tz.setDefault('Europe/Paris');

const logger = winston.createLogger({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: `logs/test.log` }),
  ],
});

module.exports = logger;
