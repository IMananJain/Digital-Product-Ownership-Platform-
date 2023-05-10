import React, {useEffect} from "react";
import styles from "../stylesheets/documentationText.module.css";
import Prism from "prismjs";
import "../stylesheets/prism.css"
import { BLOCK_EXPLORER_URL } from "@/app/constants/constants";

const DocumentationText = props => {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={styles.documentationText}>
      <h1 className={styles.mainHeading}>API Documentation</h1>
      <p className={styles.paragraph}>
      The Drunken Bytes API provides businesses with a user-friendly way of creating Product and Credential NFTs. Our REST API 
      allows customers to make requests through a simple HTTP GET URL structure and receive responses in lightweight JSON format. 
      With our platform, businesses can easily access the tools and resources they need to create and manage their own NFTs with 
      ease.
      </p>
      <p className={styles.paragraph}>
        The following API documentation can be applied for any major programming language and will present general integration 
        guides and explanations around API endpoints, request parameters and response objects. If any questions remain unanswered 
        for you, simply reach out to the drunken bytes support team for assistance.
      </p>
      <h2 className={styles.heading}>Getting Started</h2>
      <h3 className={styles.subHeading} id="api-access-key">API Access Key & Authentication</h3>
      <hr className={styles.hr} />
      <p className={styles.paragraph}>
        After creating an drunken bytes account, you will be able to retrieve
        your unique API access key using your account dashboard. Each drunken
        bytes account can have multiple API access key.
      </p>
      <p className={styles.paragraph}>
        To connect to the API, simply attach the api_key parameter to any valid
        API endpoint URL and set it to your api key. Also add the api secret in
        the Authentication Header as Bearer &lt;api_secret&gt;.
      </p>
      <p className={styles.paragraph}>Find a Nodejs example below.</p>

      <pre>
        <code className="language-javascript">
{`// Set the URL for the API endpoint
const url = 'https://api-drunkenbytes.onrender.com/v1/nft/mint-nft';

// Set the options for the HTTP request
const options = {
  method: 'POST', // Use the POST method
  headers: { // Set the request headers
    'Content-Type': 'application/json', // Set the request content type to JSON
    'Authorization': 'Bearer <API SECRET>' // Set the authorization header
  },
  body: JSON.stringify({ // Set the request body
    // Set the values for each of the request parameters
    // Replace the placeholders with the actual values
    receiverName: 'John Smith', // The name of the NFT recipient
    receiverEmail: 'john.smith@example.com', // The email of the NFT recipient
    receiverWalletAddress: '0x1234567890123456789012345678901234567890', // The wallet address of the NFT recipient
    nftType: 'document', // The type of NFT (document, product, or other)
    nftName: 'My NFT', // The name of the NFT
    useCustomImage: true, // A boolean flag indicating if a custom image is being used (default is false)
    imageBase64: 'base64-encoded-image-data', // The base64-encoded image data, if useCustomImage is true
    isTransferable: true, // A boolean flag indicating if the NFT is transferable
    isBurnable: false, // A boolean flag indicating if the NFT is burnable (default is false)
    burnAfter: null, // The date after which the NFT can be burned, if isBurnable is true
    traits: [
      { key: 'color', value: 'blue' }, // The key-value pairs describing the traits of the NFT
      { key: 'size', value: 'medium' },
      { key: 'shape', value: 'circle' }
    ]
  })
};

// Send the HTTP request and handle the response
fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Handle the response data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });`}
        </code>
      </pre>
      <div className={styles.warning}>
        <strong>Keek you key and secret safe</strong>: To prevent unauthorized
        access to your drunken bytes account, please make sure to keep your API
        access key safe at all times. You can always generate a new key using
        your account dashboard.
      </div>
      <h3 className={styles.subHeading} id="api-error">API Error</h3>
      <hr className={styles.hr} />
      <p className={styles.paragraph}>
        If your request to the drunken bytes API does not succeed, the API will
        return a JSON error response that contains error <code>code</code> and{" "}
        <code>message</code> objects indicating the type of error that occurred.
        The API also supports HTTP status codes, returning a code of{" "}
        <code>200</code> for successful requests, and an error status code (e.g.{" "}
        <code>404</code>) for failed requests.
      </p>
      <p className={styles.paragraph}>
        If a validation error occurs, hence, an API parameter is used in an
        invalid way, there will be an additional <code>context</code> object
        containing multiple sub-objects with the associated API parameter as the
        key and details about the given validation error(s) further sub-objects.
        Each instance of a validation error contains <code>key</code> and{" "}
        <code>message</code> objects.
      </p>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Example Error:</strong>
      </p>
      <pre>
        <code className="language-javascript">
{`{
  success: false ,
  error: {
    message: "Internal Server Error"
  }
}`}
        </code>
      </pre>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Common API Errors:</strong>
      </p>
      <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th> Type</th>
            <th> Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>403</code>
            </td>
            <td>
              <code>invalid_api_key</code>
            </td>
            <td>An invalid API access key was supplied.</td>
          </tr>
          <tr>
            <td>
              <code>401</code>
            </td>
            <td>
              <code>missing_access_key</code>
            </td>
            <td>No API access key was supplied.</td>
          </tr>
          <tr>
            <td>
              <code>401</code>
            </td>
            <td>
              <code>unauthorized_access</code>
            </td>
            <td>Authorization Header was not supplied.</td>
          </tr>
          <tr>
            <td>
              <code>403</code>
            </td>
            <td>
              <code>wallet_balance_is_insufficient</code>
            </td>
            <td>
              Wallet Balance required to execute the code is not sufficient.
            </td>
          </tr>
          <tr>
            <td>
              <code>404</code>
            </td>
            <td>
              <code>invalid_api_function</code>
            </td>
            <td>The given API endpoint does not exist.</td>
          </tr>
          <tr>
            <td>
              <code>404</code>
            </td>
            <td>
              <code>404_not_found</code>
            </td>
            <td>Resource not found.</td>
          </tr>
          <tr>
            <td>
              <code>500</code>
            </td>
            <td>
              <code>internal_error</code>
            </td>
            <td>An internal error occurred.</td>
          </tr>
        </tbody>
      </table>
</div>
      <h2 className={styles.heading}>API Endpoints</h2>
      <h3 className={styles.subHeading} id="create-nft">Create NFT</h3>
      <hr className={styles.hr} />
      <p className={styles.paragraph}>
      The API is capable of creating customizable Product and Credential NFT's. 
      </p>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Example API Request:</strong>
      </p>
      <pre>
        <code className="language-javascript">
        {`// Set the URL for the API endpoint
const url = 'https://api-drunkenbytes.onrender.com/v1/nft/mint-nft';

// Set the options for the HTTP request
const options = {
  method: 'POST', // Use the POST method
  headers: { // Set the request headers
    'Content-Type': 'application/json', // Set the request content type to JSON
    'Authorization': 'Bearer <API SECRET>' // Set the authorization header
  },
  body: JSON.stringify({ // Set the request body
    // Set the values for each of the request parameters
    // Replace the placeholders with the actual values
    receiverName: 'John Smith', // The name of the NFT recipient
    receiverEmail: 'john.smith@example.com', // The email of the NFT recipient
    receiverWalletAddress: '0x1234567890123456789012345678901234567890', // The wallet address of the NFT recipient
    nftType: 'document', // The type of NFT (document, product, or other)
    nftName: 'My NFT', // The name of the NFT
    useCustomImage: true, // A boolean flag indicating if a custom image is being used (default is false)
    imageBase64: 'base64-encoded-image-data', // The base64-encoded image data, if useCustomImage is true
    isTransferable: true, // A boolean flag indicating if the NFT is transferable
    isBurnable: false, // A boolean flag indicating if the NFT is burnable (default is false)
    burnAfter: null, // The date after which the NFT can be burned, if isBurnable is true
    traits: [
      { key: 'color', value: 'blue' }, // The key-value pairs describing the traits of the NFT
      { key: 'size', value: 'medium' },
      { key: 'shape', value: 'circle' }
    ]
  })
};

// Send the HTTP request and handle the response
fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Handle the response data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });`}
        </code>
      </pre>
      
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Example API Response:</strong>
      </p>
      <pre>
        <code className="language-javascript">
{`{
  success: true ,
  data: {
    txid: TRANSACTION_HASH
  }
}`}
        </code>
      </pre>
      <div className={styles.info}>
        This Transaction Hash can be viewed at {BLOCK_EXPLORER_URL}/TRANACTION_HASH. It is just a initial code of a 
        process and you can view the status at Etherscan and we will also send you an email when the generation of your NFT is 
        complete.
      </div>
      <h2 className={styles.heading} id="code-examples">Code Examples</h2>
      <p className={styles.paragraph}>
        A number of code examples in different programming languages were
        prepared for you to get up and running with the drunken bytes API as
        quickly as possible. You will find them below in PHP, Python, Node.js.,
        jQuery, Go and Ruby.
      </p>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="php">PHP</h3>
      <hr className={styles.hr} />
      <pre>
        <code className="language-javascript">
{`require 'uri'
require 'net/http'

# Set the URL for the API endpoint
url = URI('https://api-drunkenbytes.onrender.com/v1/nft/mint-nft')

# Set the request headers
headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer <API SECRET>' 
}

# Set the request body
body = {
  # Set the values for each of the request parameters
  # Replace the placeholders with the actual values
  receiverName: 'John Smith',
  receiverEmail: 'john.smith@example.com',
  receiverWalletAddress: '0x1234567890123456789012345678901234567890',
  nftType: 'document', # Only document, product, or other are allowed
  nftName: 'My NFT',
  useCustomImage: true, #default false, if not required can be omitted
  imageBase64: 'base64-encoded-image-data', #Only required if useCustomImage is true
  isTransferable: true,
  isBurnable: false, #default false, if not required can be omitted
  burnAfter: nil, #Only required if isBurnable is true
  traits: [
    { key: 'color', value: 'blue' },
    { key: 'size', value: 'medium' },
    { key: 'shape', value: 'circle' }
  ]
}.to_json

# Set the options for the HTTP request
options = {
  method: 'POST', # Use the POST method
  headers: headers,
  body: body
}

# Send the HTTP request and handle the response
response = Net::HTTP.start(url.host, url.port, use_ssl: true) do |http|
  http.request(Net::HTTP::Post.new(url, options))
end

if response.code.to_i >= 200 && response.code.to_i < 300
  puts response.body
else
  puts "There was an error with the request. HTTP Status Code: #{response.code}"
end`}
        </code>
      </pre>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="python">Python</h3>
      <hr className={styles.hr} />
      <pre>
        <code className="language-javascript">
{`import requests
import json

# Set the URL for the API endpoint
url = 'https://api-drunkenbytes.onrender.com/v1/nft/mint-nft'

# Set the values for each of the request parameters
# Replace the placeholders with the actual values
data = {
    'receiverName': 'John Smith',
    'receiverEmail': 'john.smith@example.com',
    'receiverWalletAddress': '0x1234567890123456789012345678901234567890',
    'nftType': 'document', # Only document, product, or other are allowed
    'nftName': 'My NFT',
    'useCustomImage': True, #default false, if not required can be omitted
    'imageBase64': 'base64-encoded-image-data', #Only required if useCustomImage is true
    'isTransferable': True,
    'isBurnable': False, #default false, if not required can be omitted
    'burnAfter': None, #Only required if isBurnable is true
    'traits': [
        {'key': 'color', 'value': 'blue'},
        {'key': 'size', 'value': 'medium'},
        {'key': 'shape', 'value': 'circle'}
    ]
}

# Set the request headers
headers = {'Content-Type': 'application/json'}
api_secret = 'your-api-secret'
headers['Authorization'] = f'Bearer {api_secret}'

# Send the HTTP request and handle the response
response = requests.post(url, headers=headers, data=json.dumps(data))

if response.ok:
    response_data = response.json()
    print(response_data) # Handle the response data
else:
    print('Network response was not ok')`}
        </code>
      </pre>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="nodejs">Nodejs</h3>
      <hr className={styles.hr} />
      <pre>
        <code className="language-javascript">
        {`// Set the URL for the API endpoint
const url = 'https://api-drunkenbytes.onrender.com/v1/nft/mint-nft';

// Set the options for the HTTP request
const options = {
  method: 'POST', // Use the POST method
  headers: { // Set the request headers
    'Content-Type': 'application/json', // Set the request content type to JSON
    'Authorization': 'Bearer <API SECRET>' // Set the authorization header
  },
  body: JSON.stringify({ // Set the request body
    // Set the values for each of the request parameters
    // Replace the placeholders with the actual values
    receiverName: 'John Smith', // The name of the NFT recipient
    receiverEmail: 'john.smith@example.com', // The email of the NFT recipient
    receiverWalletAddress: '0x1234567890123456789012345678901234567890', // The wallet address of the NFT recipient
    nftType: 'document', // The type of NFT (document, product, or other)
    nftName: 'My NFT', // The name of the NFT
    useCustomImage: true, // A boolean flag indicating if a custom image is being used (default is false)
    imageBase64: 'base64-encoded-image-data', // The base64-encoded image data, if useCustomImage is true
    isTransferable: true, // A boolean flag indicating if the NFT is transferable
    isBurnable: false, // A boolean flag indicating if the NFT is burnable (default is false)
    burnAfter: null, // The date after which the NFT can be burned, if isBurnable is true
    traits: [
      { key: 'color', value: 'blue' }, // The key-value pairs describing the traits of the NFT
      { key: 'size', value: 'medium' },
      { key: 'shape', value: 'circle' }
    ]
  })
};

// Send the HTTP request and handle the response
fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Handle the response data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });`}
        </code>
      </pre>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="jquery">jQuery</h3>
      <hr className={styles.hr} />
      <pre>
        <code className="language-javascript">
{`// Set the URL for the API endpoint
const url = 'https://api-drunkenbytes.onrender.com/v1/nft/mint-nft';

// Set the values for each of the request parameters
// Replace the placeholders with the actual values
const data = {
  receiverName: 'John Smith',
  receiverEmail: 'john.smith@example.com',
  receiverWalletAddress: '0x1234567890123456789012345678901234567890',
  nftType: 'document',
  nftName: 'My NFT',
  useCustomImage: true, //default false, if not required can be omitted
  imageBase64: 'base64-encoded-image-data', //Only required if useCustomImage is true
  isTransferable: true,
  isBurnable: false, //default false, if not required can be omitted
  burnAfter: null, //Only required if isBurnable is true
  traits: [
    { key: 'color', value: 'blue' },
    { key: 'size', value: 'medium' },
    { key: 'shape', value: 'circle' }
  ]
};

var headers = {'Content-Type': 'application/json'};
var apiSecret = 'your-api-secret';
headers['Authorization'] = 'Bearer ' + apiSecret;

// Send the HTTP request and handle the response
$.ajax({
  url: url,
  headers: headers,
  type: 'POST',
  contentType: 'application/json',
  data: JSON.stringify(data)
}).done(function(data) {
  console.log(data); // Handle the response data
}).fail(function(jqXHR, textStatus, errorThrown) {
  console.error('There was a problem with the fetch operation:', errorThrown);
});`}
        </code>
      </pre>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="go">Go</h3>
      <hr className={styles.hr} />
      <pre>
        <code className="language-javascript">
{`package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    // Set the URL for the API endpoint
    url := "https://api-drunkenbytes.onrender.com/v1/nft/mint-nft"

    // Define the request parameters
    params := struct {
        receiverName           string      ${'`'}json:"receiverName"${'`'}
        receiverEmail          string      ${'`'}json:"receiverEmail"${'`'}
        receiverWalletAddress  string      ${'`'}json:"receiverWalletAddress"${'`'}
        nftType                string      ${'`'}json:"nftType"${'`'}
        nftName                string      ${'`'}json:"nftName"${'`'}
        useCustomImage         bool        ${'`'}json:"useCustomImage,omitempty"${'`'}
        imageBase64            string      ${'`'}json:"imageBase64,omitempty"${'`'}
        isTransferable         bool        ${'`'}json:"isTransferable"${'`'}
        isBurnable             bool        ${'`'}json:"isBurnable,omitempty"${'`'}
        burnAfter              interface{} ${'`'}json:"burnAfter,omitempty"${'`'}
        traits                 []struct {
            Key   string ${'`'}json:"key"${'`'}
            Value string ${'`'}json:"value"${'`'}
        } ${'`'}json:"traits"${'`'}
    }{
        receiverName:           "John Smith",
        receiverEmail:          "john.smith@example.com",
        receiverWalletAddress:  "0x1234567890123456789012345678901234567890",
        nftType:                "document", // Only document, product, or other are allowed
        nftName:                "My NFT",
        useCustomImage:         true,       // default false, if not required can be omitted
        imageBase64:            "base64-encoded-image-data", // Only required if UseCustomImage is true
        isTransferable:         true,
        isBurnable:             false, // default false, if not required can be omitted
        burnAfter:              nil,   // Only required if IsBurnable is true
        traits: []struct {
            Key   string ${'`'}json:"key"${'`'}
            Value string ${'`'}json:"value"${'`'}
        }{
            {Key: "color", Value: "blue"},
            {Key: "size", Value: "medium"},
            {Key: "shape", Value: "circle"},
        },
    }

    // Encode the request body as JSON
    body, err := json.Marshal(params)
    if err != nil {
        panic(err)
    }

    // Create a new HTTP request with the specified URL and request body
    req, err := http.NewRequest("POST", url, bytes.NewBuffer(body))
    if err != nil {
        panic(err)
    }
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer <YOUR API SECRET>")

    // Send the HTTP request and handle the response
    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    if resp.StatusCode != http.StatusOK {
        fmt.Printf("Error: %v", resp.Status)
        return
    }

    var result map[string]interface{}
    if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
        fmt.Printf("Error: %v", err)
        return
    }

    fmt.Println(result)
}
`}
        </code>
      </pre>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="ruby">Ruby</h3>
      <hr className={styles.hr} />
      <pre>
        <code className="language-javascript">
{`require 'net/http'
require 'uri'
require 'json'

# Set the URL for the API endpoint
url = URI('https://api-drunkenbytes.onrender.com/v1/nft/mint-nft')

# Set the options for the HTTP request
options = {
  method: 'POST', # Use the POST method
  headers: { # Set the request headers
    'Content-Type': 'application/json' # Set the request content type to JSON
    'Authorization': 'Bearer <API SECRET>' # Set the authorization header
  },
  body: {
    # Set the values for each of the request parameters
    # Replace the placeholders with the actual values
    receiverName: 'John Smith',
    receiverEmail: 'john.smith@example.com',
    receiverWalletAddress: '0x1234567890123456789012345678901234567890',
    nftType: 'document', # Only document, product, or other are allowed
    nftName: 'My NFT',
    useCustomImage: true, #default false, if not required can be omitted
    imageBase64: 'base64-encoded-image-data', #Only required if useCustomImage is true
    isTransferable: true,
    isBurnable: false, #default false, if not required can be omitted
    burnAfter: nil, #Only required if isBurnable is true
    traits: [
      { key: 'color', value: 'blue' },
      { key: 'size', value: 'medium' },
      { key: 'shape', value: 'circle' }
    ]
  }.to_json
}

# Send the HTTP request and handle the response
response = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  request = Net::HTTP::Post.new(url)
  options.each { |key, value| request[key] = value }
  http.request(request)
end

if response.is_a?(Net::HTTPSuccess)
  data = JSON.parse(response.body)
  puts data # Handle the response data
else
  puts "Error: #{response.code} - #{response.message}"
end
`}
        </code>
      </pre>
      <span className={styles.space} />
    </div>
  );
};

export default DocumentationText;
