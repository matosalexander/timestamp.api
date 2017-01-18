<h2>Timestamp Microservice for <a href="https://www.freecodecamp.com/challenges/timestamp-microservice">Free Code Camp</a></h2>
    <p>Simple JavaScript app that will return the unix time and natural date for the received input string.</p>
    <h3>Example usage:</h3>
    <div class="example">
        <code>https://microservice-api-cloned-alexandermatos.c9users.io/<span class="parameter">january 17, 2017</span></code>
        <br/>
        <code>https://microservice-api-cloned-alexandermatos.c9users.io/<span class="parameter">1484611200</span></code>
    </div>
    <h3>Example output:</h3>
    <div class="example">
        <code><span class="output">{"unix":"1484611200", "natural":"January 17, 2017"}</span></code>
        <br/>
        <code><span class="output">{"unix": null, "natural": null}</span></code>
    </div>
    <h3>Query Formats</h3>
    <table id="tformats" cellspacing="0">
        <tr>
            <th>String</th>
            <th>Formats</th>
        </tr>
        <tr>
            <td>Unix</td>
            <td><span class="bold">1484611200</span></td>
        </tr>
        <tr>
            <td>Natural</td>
            <td>
                <span class="bold">january 17, 2017<br>
                jan17,2017</span>
            </td>
        </tr>
    </table>
    <h4>Demo: <a href="https://github.com/matosalexander/timestamp.api" target="_blank">https://github.com/matosalexander/timestamp.api</a></h4>