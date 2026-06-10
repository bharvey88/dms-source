---
title: "Crypto Wallets"
description: "This write up will contain information aimed towards beginners wanting to explore the specifics behind bitcoin wallets. Advanced users may find this inform..."
sourceUrl: "https://dallasmakerspace.org/wiki/Crypto_Wallets"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Crypto_Wallets\">legacy DMS wiki</a> — content may be outdated."
---
This write up will contain information aimed towards beginners wanting to explore the specifics behind bitcoin wallets. Advanced users may find this information redundant, however it is always good to step back through the basics when you have developed your perspective within an area of interest.

## What is a bitcoin wallet?

The average user may use a wallet that can be downloaded as an app on their phone or tablet. Others will hold their funds on an exchange like Coinbase or Gemini. Some technical users might have a wallet on a piece of paper that is hidden in an undisclosed location. In the end, everyone interacts with the network using some type of bitcoin wallet. But “wallet” isn’t really the best term. It was adopted because the thing we use to make transactions right now is a physical wallet, it’s what holds our bills and credit cards. But when a bitcoin wallet is setup, it does not contain any physical or digital coins. A bitcoin wallet only gives you the ability to change part of a big public database called the ledger, or UTXO set. The mechanism that allows this is called Public-key Cryptography.

Please review [this infographic](https://s3.amazonaws.com/bitcoindesigned-prod/media/public-key-cryptography-in-bitcoin-transactions.png) for a quick explanation.

Private keys are contained in a bitcoin wallet. So a clearer term might be ‘Key-chain”. For example, if someone takes my car keys; they would have access to my vehicle, my house, my office, and everything of value I have in those locations unless I have additional security. Same thing applies to a bitcoin wallet, If you were to lose the wallet (or private keys), whoever comes across it will have access to the value your keys unlock on the ledger. If it is lost entirely, those coins are gone forever and there is no way to get them back. And since there is a finite amount of bitcoins that can be produced (about 21M), losing coins effectively increases the value of the other coins in the network. It’s almost a charitable act.

With a bitcoin wallet, users have the ability to be completely sovereign over their own funds. They are able to transfer and settle value across the globe and that value cannot be confiscated by anyone due to the security and cryptography on the bitcoin blockchain. But not all wallets are created equal. With each type comes tradeoffs in security and usability. The cryptography may be solid, but that does not stop users from making errors and leaking their private keys on the internet, or leaving the keys written down, out in the open for others to see. Social engineering by scammers and operator error are the top ways people lose their funds. This is where the specific type of wallet comes into play. Your spending habits and goals will determine which wallet, or combination of wallets, will be best for you.

In the early days, Bitcoin was very difficult to use securely. It was cumbersome, highly technically, and risky to hold bitcoin on your computer or hard drive. But things have changed a lot within the last few years. Even though it is super easy to download a wallet, users need to understand the difference and security trade offs between the different types of wallets.

**Side Note:** Infographic about UTXOs [can be found here](https://s3.amazonaws.com/bitcoindesigned-prod/media/privacy-and-utxo-part1.png) for those that are curious.

## Exchanges/Online Wallets

Ease of access has driven tons of users to online wallets and exchanges such as Coinbase, but these wallets are misleading. Users are not sovereign over their funds on an exchange. A good heuristic to follow is, “Not your keys, not your bitcoin.” When you store bitcoin on these exchanges, you’re generally not given direct access to the private keys associated with your bitcoin. It’s like having your parents or friend in charge of your funds. You have access to it yes, but they can take it away from you, see everything your doing, and they might even use it or lose it without your permission.

Exchanges have a bad reputation for being hacked and losing their customer’s funds. These are not hacks from a faulty bitcoin protocol; these hacks result from inefficiencies and vulnerabilities within the company, or user error. So from a security standpoint, online wallets are a terrible place to keep your funds because you have to place 100% trust in a 3rd party who may or may not be qualified to safeguard your UTXOs.

Remember, if you are not generating and holding your private keys, your coins might as well belong to someone else. Repeat after me,

“Not your keys, not your coins.”

“Not your keys, not your coins.”

“Not your keys, nacho coins.”

“Nacho keys, nacho coins.”

“Nacho cheese, nacho coins.”

[Shameless plus...](https://quinsolo.com/product/nacho-cheese-nacho-bitcoin-vinyl-decal-black/)

## Paper Wallets

As stated earlier, a “wallet” is some software that handles your private and public keys. A paper wallet is as basic as it sounds, it is a private and public key written on a piece of paper. However, the security risks for generating and protecting the paper wallet is where the security starts to fall apart.

To make a private key, the easiest method is with a computer program. If you are use a computer that has been connected to the internet then you have to assume that device is compromised. If there is any malware on the machine, potential hackers can get to the wallet or the information used to make the private key. That means they have the ability to take your coins.

Let’s say you were able to buy a brand new machine that never touched the internet and successfully create the private key. The next security flaw is the printer, some of the least secure and hacker friendly devices in the world. If you send your keys to the printer, that file could be saved, copied and reprinted in the future.

It becomes a difficult and expensive task just to transfer keys to a piece of paper in a safe way. Honestly, the best and most secure method is to roll some hexadecimal dice and write down the key by hand. Example here: <https://www.swansontec.com/bitcoin-dice.html>

## Hot Wallets

Hot wallets are what most users are familiar with. This is the wallet downloaded in an app or on your local computer. “Hot” in this case means it’s connected to the internet or a network for the majority of the time. Hot wallets can vary in their security levels due to features some software offers.

Since the wallet is mostly be online, you have to worry about potential malware that could be exposed to your device. Some hot wallets offer the ability to add an encryption passphrase to the private key, requiring you to enter that phrase every time you open the wallet. This phase can be memorized so even if the attacker had access to the keys, they would not have the final passphrase to move you funds. Though, [brute force attempts](https://www.cloudways.com/blog/what-is-brute-force-attack/) to get the password are still possible.

Hackers getting to your keys is not the only concern for hot wallets. If your phone has malware but your keys are safe, an attacker could perform something called a “Man in the Middle” attack. This is when the attacker changes the data in your wallet, enabling you to mistakenly give funds to the attacker. Public addresses could be changed as they appear on the screen, directing the coins to the attackers wallet instead of the intended recipient. Or key loggers could be installed to record the passphrase setup to secure the wallet.

Hot wallets bring usability and security to a large audience, but in practice are not good for storing a lot of money. Software wallets are best used for quick spending and low balances. A few software wallets are listed below.

[Bitcoin Core](https://bitcoin.org/en/bitcoin-core/): This is the granddaddy of all wallets. It is a full node and the very first implementation of bitcoin. Bitcoin Core keeps a full copy of the bitcoin ledger to verify and validate transactions. When a transaction arrives in this wallet, it is verified by your personal equipment, much like if you were able to self-examine and validate gold for consistency back in the day. You do not have to trust a third party that your coins (UTXOs) are not counterfeit. This software is not recommended for new users as it’s a bit complicated to use and takes up around 250 GBs of hard drive space. However this is the most legit way to be a part of the bitcoin network. It is encouraged that every user work towards running a full node as more and more mobile wallets are incorporating features to integrate validation from personal full nodes.

[Samourai Wallet](https://samouraiwallet.com/) (Android only for now): Samourai wallet is a privacy focused bitcoin mobile wallet that is very user friendly. It is jam packed with privacy features and it’s up to date with all the latest bitcoin developments. Highly recommended for any Android user, Iphone release in Q1 of 2019.

[Coinomi](https://www.coinomi.com/): This mobile wallet is available on the App Store and Google play. It is built to hold multiple types of cryptocurrencies, all under the same set of private keys. Some of the UX could be improved, but it gets the job done.

## Cold Storage / Hardware Wallets

Cold storage is the opposite of a hot wallet (*who could have guessed?*). “Cold” means that the keys are not always connected to the internet or a network. The most common form of cold storage is a hardware wallet. This is a simple device with a screen and buttons that is about the size of a USB flash drive. It’s built specifically to hold the private keys and sign transactions and can’t do anything else. Since the purpose of the device is so limited, it’s much easier to secure since the attack surface is so small. In contrast to a mobile hot wallet; your phone is a very complicated, multipurpose machine. It’s designed to do all sorts of things and interact will all sorts of protocols and data. This is a huge attack surface that gives potential hackers options on how to get into the device. This does not mean a simple device can not be compromised, it just reduces the chances dramatically due to the design.

*But how can I send a bitcoin transaction if the keys aren’t on a network?* This is the beauty of a hardware wallet. The device holds the keys and an additional computer is used to craft a bitcoin transaction. When you send coins, a transaction is sent to the device where it is signed by the private key and sent back to the machine, where it is then broadcasted to the Bitcoin network. An exposed, signed bitcoin transaction is not the same as an exposed private key. Anyone with access to the signed transaction can only do what is specified in the transaction, there is no sensitive information contained within.

*But what about the Man in the Middle attack?* This is where the screen comes into play. Since we know our simple, offline device is not easily hacked. We can be sure that the information displayed on the screen is correct. When we craft the unsigned transaction on a machine (even a compromised one) we can have the option to review the transaction details on the hardware wallet. This gives us the ability to verify our deposit address and know the UTXOs will be sent to the correct address, not the attackers wallet. A hardware wallet can defeat and even expose a compromise on whatever machine is used.

Hardware wallets are built for security and usability. Users can use all security features of hot wallets and more, like local device pin codes, ability to create a “dummy” accounts if you are on the wrong side of a [“5 dollar wrench”](https://doc.satoshilabs.com/trezor-user/_images/5-dollar-wrench.png) attack, and easy secure backups. If you are a user that has a significant amount of bitcoin or crypto, you should look to acquire a hardware wallet in order to secure the funds. There are a few different types on the market with few security tradeoffs between them.

**Side Note:** Paper wallets are considered cold storage since they are not always touching a network. But the security risk for generating and printing the keys is still very much a problem.

[Trezor](https://trezor.io/): Trezor was the very first hardware wallet introduced. It is made by Satoshi Labs, a very bitcoin friendly company. The entire project is open source, meaning anyone can examine the code used in the product to verify it’s security and integrity. This was the first wallet i owned and it is still my favorite.

[Ledger](https://www.ledger.com/products/ledger-nano-s): Ledger is a company that is a bit more focused on other coins. Their firmware is not completely open source, meaning users have to trust that the security and integrity of the project is not compromised in any way. However, since they support more altcoins, it is safer to keep them on a hardware device than a hot wallet alternative.

[Cold Card](https://coldcardwallet.com/): This is a new open source HW wallet that is extra secure. The device is designed to NEVER touch the internet, you do not even need to connect it to a computer. The idea is to craft the bitcoin transaction on a machine, then transfer that unsigned tx to a micro sd card. You can then take only the micro sd card to your super secure, underground bunker/faraday cage and use the cold card to get a signature. Then the signed transaction can be broadcasted to the network and the private keys never had to be exposed or moved.

[OpenDime](https://opendime.com/): OpenDime is a pseudo HW wallet. It is a small device designed to be handed from person to person, similar to a dollar bill. When you setup the device you are not given access to the private key. You are only given the option to send bitcoin to a public address. In order to spend the funds, the user has to physically damage a part of the device unlocking the private keys. This gives users the ability to transfer bitcoin from person to person without ever doing an onchain transaction. And since the device has to be tampered with before funds can be spent, it is quite easy to see if the opendime has been compromised.

An example would be, if you wanted to purchase a car for 1.5 btc. You could setup and transfer the UTXOs (coins) to the Opendime anytime before you go to the dealership. When you arrive, all you have to do is had the opendime to the salesperson and they have full, verifiable control of all the funds on that device. He can plug it into a computer to see the balance and amount of confirmations, greatly reducing the friction and security risk of an in-person, large on-chain transaction.

[More Hardware wallet comparisons here!](https://allthingsdecentral.com/pages/compare-hardware-wallets)

## Multi-Signature

A multi signature wallet is designed to add extra security to your funds. It requires multiple private keys to sign a transaction before UTXOs can be moved. This is usually a 2 out of 3 scheme, but can work in any combination. A multisig wallet can use any or all of the different wallet types in combination. For example, a 2 of 3 multisig can be setup that consists of a Trezor, Samourai wallet on Android, and a paper wallet. Only two of these wallets are necessary to spend the coins associated with the multisignature addresses. [A nice infographic can be found here](https://s3.amazonaws.com/bitcoindesigned-prod/media/what-is-a-multisig-wallet.png).

## Conclusion

There are quite a few ways to store your coins, but security and risk trade-offs are there. Educate yourself on the options and choose the best one for your situation. Do your own research.

A recommendation is to get a HW wallet if you have over \$100 worth of coins, as that is the average cost of a device. Never keep any amount on an exchange unless you are actively trading and do not keep more that \$50 worth of coins idle in a mobile wallet.

Things move fast in this industry and new tech is coming. HTC is building a [Blockchain specific phone](https://www.htcexodus.com/), which should bring added security to mobile hot wallets. Please note that this information will not be constant as it’s an evolving system, so cross reference and double check things when your finances are involved. Don’t Trust, Verify.
