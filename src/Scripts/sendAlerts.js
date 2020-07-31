const service_id = 'gmail';
const template_id = 'template_96dlGNPX';

const sendAlerts = (alerts, cryptos, mail, dispatch, deleteAlert) => {
    alerts.forEach(alert => {
        let crypto = cryptos.find(elt => elt.asset_id === alert.currency);
        var template_params = {
            "mail": mail,
            "crypto_name": crypto.asset_id,
        }
        if (alert.trigger === '<' && crypto.price_usd < alert.amount) {
            template_params.text = `falls under ${alert.amount} $`;
            window.emailjs.send(service_id, template_id, template_params)
                .then(console.log('Email sent'))
                .catch(e => console.log(e));
            dispatch(deleteAlert(alert.id));
        }

        else if (alert.trigger === '>' && crypto.price_usd > alert.amount) {
            template_params.text = `is above ${alert.amount} $`;
            window.emailjs.send(service_id, template_id, template_params)
                .then(console.log('Email sent'))
                .catch(e => console.log(e));
            dispatch(deleteAlert(alert.id));
        }
    })
}

export default sendAlerts;