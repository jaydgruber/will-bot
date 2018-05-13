const MarkovChain = require('markovchain');
const fetch = require('node-fetch');
const fs = require('fs');
const slack_secret = require('./tmp/slack_secret.js');

let wstream = fs.createWriteStream('chalice_logs.json');

const channel = 'G8SNJM07L'; // chalice
const count = '1000'; // # of messages to be fetched 
const token = slack_secret.token; // imported from /tmp.  
const query = `token=${token}&channel=${channel}&count=${count}`;


const host = 'https://slack.com';
const path = 'api/groups.history';
const url = `${host}/${path}?${query}`
const target_user = 'U0E5PKHL6'; // will.whitwell

const getLogs = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  let wills = json.messages.filter( m => m.user === target_user && m.subtype !== 'file_share' )
    .map(m => m.text);
  console.log(wills);
};

getLogs(url);