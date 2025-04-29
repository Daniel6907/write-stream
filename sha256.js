const crypto = require('crypto');
const prompt = require('prompt');

prompt.start();

prompt.get(['password', 'confirmPassword'], function (err, result) {
    if (err) {
        console.error(err);
        return;
    }

    const { password, confirmPassword } = result;

    if (password === confirmPassword) {
        const hash = crypto.createHash('sha256').update(password).digest('hex');
        console.log('Пароль успішно підтверджено та захешовано:');
        console.log(hash);
    } else {
        console.log('Паролі не співпадають. Спробуйте ще раз.');
    }
});