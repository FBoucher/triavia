import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import nodeFetch from 'node-fetch';


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function started!');
    const amount = req.query.amount;
    const difficulty = req.query.difficulty;
    
    let data: JSON; 
    if(amount && difficulty)
    {
        const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
        const response = await nodeFetch(endpoint);
        data = await response.json();
        console.log("Data ojb is: " + data);
    }

    context.log('This HTTP triggered function executed successfully. Pass a amount and difficulty in the query string or in the request body for a personalized response.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: data
    };

};


export default httpTrigger;