import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import nodeFetch from 'node-fetch';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function started!');
   
    let data: JSON; 
    const endpoint = `https://opentdb.com/api_category.php`;
    const response = await nodeFetch(endpoint);
    data = await response.json();
    console.log("Data ojb is: " + data.stringify);

    context.log('This HTTP triggered function executed successfully. Pass a amount and difficulty in the query string or in the request body for a personalized response.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: data
    };

};

export default httpTrigger;