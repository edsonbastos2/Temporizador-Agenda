const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 3', function() {
    console.log('Execultando Tarefa 1!', new Date().getSeconds())
}); 

setTimeout( () => {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000);

/**Uma regra de recorrencia, 
 * vc pode configurar valores 
 * para que ele poça ficar de forma 
 * recorrente execultando essa regra */

 const regra = new schedule.RecurrenceRule();
 regra.dayOfWeek = [new schedule.Range(1,5)] // 0-Domingo, 1-segunda, 2-Terça-feira ...
 regra.hour = 16 // Escolhendo a hora
 regra.second = 30 // Sempre que o segundo for 30 ele vai execultar essa regra

 const tarefa2 = schedule.scheduleJob(regra, function(){
     console.log('Execultando Tarefa 2!', new Date().getSeconds())
 })