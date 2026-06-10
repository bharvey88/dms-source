---
title: "Vpn"
description: "DMS no longer uses this for internal access. This page has been retained for historical reference."
sourceUrl: "https://dallasmakerspace.org/wiki/Vpn"
sidebar:
  hidden: true
banner:
  content: "Archived from the <a href=\"https://dallasmakerspace.org/wiki/Vpn\">legacy DMS wiki</a> — content may be outdated."
---
**DMS no longer uses this for internal access. This page has been retained for historical reference.**

We use openvpn for accessing the internal network externally. Only Makerspace members in good standing and are a member of the VPN user group have access.

To setup one needs the following config in addition to the OpenVPN program.

### config (dms.ovpn)

    client
    dev tun
    tls-client

    remote 47.190.37.3 1194 udp
    remote-random

    auth-user-pass
    cipher AES-256-CBC
    ncp-ciphers AES-256-GCM:AES-128-GCM
    auth SHA1

    persist-tun
    persist-key
    comp-lzo adaptive
    redirect-gateway
    reneg-sec 0
    mssfix 1450
    float
    resolv-retry infinite

    remote-cert-tls server
    auth-user-pass
    pull
    fast-io

    <ca>
    -----BEGIN CERTIFICATE-----
    MIIE2zCCA8OgAwIBAgIBAjANBgkqhkiG9w0BAQsFADCBmDELMAkGA1UEBhMCVVMx
    DjAMBgNVBAgTBVRleGFzMRMwEQYDVQQHEwpDYXJyb2xsdG9uMRowGAYDVQQKExFE
    YWxsYXMgTWFrZXJzcGFjZTEyMDAGCSqGSIb3DQEJARYjaW5mcmFzdHJ1Y3R1cmVA
    ZGFsbGFzbWFrZXJzcGFjZS5vcmcxFDASBgNVBAMTC2ludGVybmFsLWNhMB4XDTE4
    MDMwOTE3MjcyM1oXDTIzMDMwODE3MjcyM1owgb4xCzAJBgNVBAYTAlVTMQ4wDAYD
    VQQIEwVUZXhhczEPMA0GA1UEBxMGRGFsbGFzMRowGAYDVQQKExFEYWxsYXMgTWFr
    ZXJzcGFjZTEyMDAGCSqGSIb3DQEJARYjaW5mcmFzdHJ1Y3R1cmVAZGFsbGFzbWFr
    ZXJzcGFjZS5vcmcxITAfBgNVBAMTGGludGVybWVkaWF0ZS1jZXJ0aWZpY2F0ZTEb
    MBkGA1UECxMSSW5mcmFzdHJ1Y3R1cmUgTk9DMIIBIjANBgkqhkiG9w0BAQEFAAOC
    AQ8AMIIBCgKCAQEArwp5+Jhszq4GIbKQhGwbjfpvEpMCPcnVPvQwVvm6ny05aLXj
    2DewO8S91RKScS+VVnWChl7AqZLbDTz74SMA59hJ9tarql7zUB7Gza+BnGNGrefs
    QwJ9q5hlNKxu8bld8eUNzcoxrESkotwb8YCD/NlDD/EnygGzzMsL18+wdgaAs99S
    jBk2BYKL2uVu9VbiiTLvyxC830CH9kvy8FRnSwsZrJ+i52UfReeilbbDrTyB9w9z
    MN4O2Z+BWKOJnlVBS0+DGOb4R/x8OOw/ynKyPryG4VDMQZNd3Ja3PHYVcPyXTBmb
    WgUV6NckmZPFO4ifiMgwNFCU987fZx6yKfUQ3wIDAQABo4IBBjCCAQIwHQYDVR0O
    BBYEFFfaLeIDQvz4OTWES5wJnh2i4KZGMIHFBgNVHSMEgb0wgbqAFAnshTDWMAMm
    hu0Afa793r+pkmXzoYGepIGbMIGYMQswCQYDVQQGEwJVUzEOMAwGA1UECBMFVGV4
    YXMxEzARBgNVBAcTCkNhcnJvbGx0b24xGjAYBgNVBAoTEURhbGxhcyBNYWtlcnNw
    YWNlMTIwMAYJKoZIhvcNAQkBFiNpbmZyYXN0cnVjdHVyZUBkYWxsYXNtYWtlcnNw
    YWNlLm9yZzEUMBIGA1UEAxMLaW50ZXJuYWwtY2GCAQAwDAYDVR0TBAUwAwEB/zAL
    BgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQELBQADggEBAMN91xL1qll7lmeJ0fmvRIOt
    LCNYIiV8H5J0PAX/OnxfRhfNE1nzeh7Y5Nr+r/+WwFkuZlwHXXTqOA1lN6eEZH3A
    FqlIu+gt06CnPUp4W2LXzP44oOfnEUJLbIH9whvZr1efUvmSe7+ilXIb2rTvV2C9
    rBjj2k4o8jX99ekFr+y9uGFo8ckhiiCNL3uUzrjoEWaUzR44visSiyfsg9prxaX+
    PiEjIAVKIenUKjnXVcTjn6Ib2WXjcbldOUFOWwR8q/51frpeT9nrIMAecHGHIVgo
    T8jOHMB8S06b2XcVw1QYmIpQPTVa5u+UFikHfgFFB7rKwioHf1k2nkMRLJbH0pk=
    -----END CERTIFICATE-----
    -----BEGIN CERTIFICATE-----
    MIIEtTCCA52gAwIBAgIBADANBgkqhkiG9w0BAQsFADCBmDELMAkGA1UEBhMCVVMx
    DjAMBgNVBAgTBVRleGFzMRMwEQYDVQQHEwpDYXJyb2xsdG9uMRowGAYDVQQKExFE
    YWxsYXMgTWFrZXJzcGFjZTEyMDAGCSqGSIb3DQEJARYjaW5mcmFzdHJ1Y3R1cmVA
    ZGFsbGFzbWFrZXJzcGFjZS5vcmcxFDASBgNVBAMTC2ludGVybmFsLWNhMB4XDTE1
    MTIyODAyMTAwNVoXDTI1MTIyNTAyMTAwNVowgZgxCzAJBgNVBAYTAlVTMQ4wDAYD
    VQQIEwVUZXhhczETMBEGA1UEBxMKQ2Fycm9sbHRvbjEaMBgGA1UEChMRRGFsbGFz
    IE1ha2Vyc3BhY2UxMjAwBgkqhkiG9w0BCQEWI2luZnJhc3RydWN0dXJlQGRhbGxh
    c21ha2Vyc3BhY2Uub3JnMRQwEgYDVQQDEwtpbnRlcm5hbC1jYTCCASIwDQYJKoZI
    hvcNAQEBBQADggEPADCCAQoCggEBAPPIjSmarsfAITvHISqZG+9DF60Hy/wV5x//
    PAwZnAY5OdF3Hi4qZdeHDmiFX/tmXqdxfwx/H7Bqd7dW6loqAnZFtCJOYAUsFspu
    ST9B/fAgIju7Y8uy8MhukFsEWSPR+sA0PnW4X1cyQM4560Zv1OHVpBwi9UbRqnPS
    1pr9WLSzuWMBHo2qoS+oias2QyL04EUE0aNXKHUE/GCb9DcGdrmbO9lHiyxpVdKs
    a6C9mXWWnw/7iTc3N6rTC8DeeJBGmQw6zRIHKm8d7LIjC0M0ViMR9h9MnpZrMZYd
    U3gD5gagN+d11JoeDOQHRER0KybBBLAyll8H+EGWhMNBoDpPz2sCAwEAAaOCAQYw
    ggECMB0GA1UdDgQWBBQJ7IUw1jADJobtAH2u/d6/qZJl8zCBxQYDVR0jBIG9MIG6
    gBQJ7IUw1jADJobtAH2u/d6/qZJl86GBnqSBmzCBmDELMAkGA1UEBhMCVVMxDjAM
    BgNVBAgTBVRleGFzMRMwEQYDVQQHEwpDYXJyb2xsdG9uMRowGAYDVQQKExFEYWxs
    YXMgTWFrZXJzcGFjZTEyMDAGCSqGSIb3DQEJARYjaW5mcmFzdHJ1Y3R1cmVAZGFs
    bGFzbWFrZXJzcGFjZS5vcmcxFDASBgNVBAMTC2ludGVybmFsLWNhggEAMAwGA1Ud
    EwQFMAMBAf8wCwYDVR0PBAQDAgEGMA0GCSqGSIb3DQEBCwUAA4IBAQDUonIhLcMx
    g2Fka209BT6g19b9Q3WdaSG+7bF5IPnvcEWHE1oK/CrlMKLN5ZEsAvYuJnwdx+KB
    1BQma51ja7o2E7iuBDO24bkXWS4VNVCrzyqIbGM8rSH/68mLn5DEgtFKE5B7GQzh
    37URz0i+zo2bsI4Pdxr40QA8rZeyw+CzvQRwAvLOjAyv/2kMAmAGZuvwggzrDR7r
    IXiYrgHpAGReuG8/kXRou/I1DmO5KUZqoQjPy9xxeb7nNjgLvSYIjUDmWa1R62eE
    dFn58MKCgNKezBodurFFPHNV9uDTijwQ1bYK5y8CzQIWQ9yjGfNDqmJI2vpmAsYh
    6A72c84Ux8HW
    -----END CERTIFICATE-----
    </ca>


    <cert>
    -----BEGIN CERTIFICATE-----
    MIIEtTCCA52gAwIBAgIBADANBgkqhkiG9w0BAQsFADCBmDELMAkGA1UEBhMCVVMx
    DjAMBgNVBAgTBVRleGFzMRMwEQYDVQQHEwpDYXJyb2xsdG9uMRowGAYDVQQKExFE
    YWxsYXMgTWFrZXJzcGFjZTEyMDAGCSqGSIb3DQEJARYjaW5mcmFzdHJ1Y3R1cmVA
    ZGFsbGFzbWFrZXJzcGFjZS5vcmcxFDASBgNVBAMTC2ludGVybmFsLWNhMB4XDTE1
    MTIyODAyMTAwNVoXDTI1MTIyNTAyMTAwNVowgZgxCzAJBgNVBAYTAlVTMQ4wDAYD
    VQQIEwVUZXhhczETMBEGA1UEBxMKQ2Fycm9sbHRvbjEaMBgGA1UEChMRRGFsbGFz
    IE1ha2Vyc3BhY2UxMjAwBgkqhkiG9w0BCQEWI2luZnJhc3RydWN0dXJlQGRhbGxh
    c21ha2Vyc3BhY2Uub3JnMRQwEgYDVQQDEwtpbnRlcm5hbC1jYTCCASIwDQYJKoZI
    hvcNAQEBBQADggEPADCCAQoCggEBAPPIjSmarsfAITvHISqZG+9DF60Hy/wV5x//
    PAwZnAY5OdF3Hi4qZdeHDmiFX/tmXqdxfwx/H7Bqd7dW6loqAnZFtCJOYAUsFspu
    ST9B/fAgIju7Y8uy8MhukFsEWSPR+sA0PnW4X1cyQM4560Zv1OHVpBwi9UbRqnPS
    1pr9WLSzuWMBHo2qoS+oias2QyL04EUE0aNXKHUE/GCb9DcGdrmbO9lHiyxpVdKs
    a6C9mXWWnw/7iTc3N6rTC8DeeJBGmQw6zRIHKm8d7LIjC0M0ViMR9h9MnpZrMZYd
    U3gD5gagN+d11JoeDOQHRER0KybBBLAyll8H+EGWhMNBoDpPz2sCAwEAAaOCAQYw
    ggECMB0GA1UdDgQWBBQJ7IUw1jADJobtAH2u/d6/qZJl8zCBxQYDVR0jBIG9MIG6
    gBQJ7IUw1jADJobtAH2u/d6/qZJl86GBnqSBmzCBmDELMAkGA1UEBhMCVVMxDjAM
    BgNVBAgTBVRleGFzMRMwEQYDVQQHEwpDYXJyb2xsdG9uMRowGAYDVQQKExFEYWxs
    YXMgTWFrZXJzcGFjZTEyMDAGCSqGSIb3DQEJARYjaW5mcmFzdHJ1Y3R1cmVAZGFs
    bGFzbWFrZXJzcGFjZS5vcmcxFDASBgNVBAMTC2ludGVybmFsLWNhggEAMAwGA1Ud
    EwQFMAMBAf8wCwYDVR0PBAQDAgEGMA0GCSqGSIb3DQEBCwUAA4IBAQDUonIhLcMx
    g2Fka209BT6g19b9Q3WdaSG+7bF5IPnvcEWHE1oK/CrlMKLN5ZEsAvYuJnwdx+KB
    1BQma51ja7o2E7iuBDO24bkXWS4VNVCrzyqIbGM8rSH/68mLn5DEgtFKE5B7GQzh
    37URz0i+zo2bsI4Pdxr40QA8rZeyw+CzvQRwAvLOjAyv/2kMAmAGZuvwggzrDR7r
    IXiYrgHpAGReuG8/kXRou/I1DmO5KUZqoQjPy9xxeb7nNjgLvSYIjUDmWa1R62eE
    dFn58MKCgNKezBodurFFPHNV9uDTijwQ1bYK5y8CzQIWQ9yjGfNDqmJI2vpmAsYh
    6A72c84Ux8HW
    -----END CERTIFICATE-----
    </cert>

    key-direction 1
    <key>
    -----BEGIN OpenVPN Static key V1-----
    ea47696a4f305dd45400f95d294f178c
    5c61baa25d352356b1749b7fd2bfc5c4
    4c0fabb9bedf01025889ef3cf64ae196
    b3bd03bd1407de0589c48376befbc8ce
    6d32ec958ceb526e3ad665179d15b8c2
    14e1a7341aa917d1cb6d31e3d9b9b51b
    5f772de3a01ba363a7afb690b5f3819c
    f05459360d0370792650a7bc19257db9
    2e6112994f3ba74420a371c381dae8b2
    334f24de911d150e6a217daa18ea66c8
    2e7b67d5f7775cb8218a34ac60a39bcf
    842745ec58bfa7d57fa78f74a7cd31db
    cd7d8452bdec813c0c1c7eb6ebcdffb7
    bd14d99e9af76322f6e1533d1eedc7b5
    9c9c9a5dad09b1d00668a624557983c3
    5855947c0402b1930869202ef4662609
    -----END OpenVPN Static key V1-----
    </key>

When prompted for a user credential then use your Active Directory Login.



## Caveat

When downloading a copy of OpenVPN. Choose the community edition (which we're running) as this an open source project and not a service as a solution (SaaS) subscription.



## Windows Generic Tutorial

If one has chocolatey installed their windows system then using:

       runas /user:Administrator "choco install -y openvpn"

Would be sufficient otherwise download it from <https://swupdate.openvpn.org/community/releases/openvpn-install-2.4.6-I602.exe>

<https://www.youtube.com/watch?v=H45ReE2JJKo>

## Linux Generic Tutorial

Use your distro's package manager to install openvpn-client then copy the config file to /etc/openvpn/dms.ovpn.conf.

For example:

       sudo apt-get install openvpn || sudo yum install openvpn || sudo apk add --no-cache openvpn

<https://www.youtube.com/watch?v=mc0nxWNwEDI>



## Android Generic Tutorial

Get the client from: <https://play.google.com/store/apps/details?id=net.openvpn.openvpn>

<https://youtu.be/EPKmXNGQgjY>

## OSX Tutorial

If one has homebrew installed their mac then just using:

       brew install openvpn tunnelblick


Would be sufficient other wise download tunnelblick from <https://tunnelblick.net/>. Its advise on a mac to use tunnelblick because its a free client for OpenVPN on OS X and macOS.


<https://www.youtube.com/watch?v=c0xAGSxN-RI>



## Docker Tutorial

### Starting an OpenVPN client instance

       sudo cp /path/to/dms.ovpn /etc/openvpn/dms.ovpn.conf
       sudo docker run -it --cap-add=NET_ADMIN --device /dev/net/tun --name vpn \
               --restart unless-stopped
               -v /etc/openvpn:/vpn -d dperson/openvpn-client \
               -v 'dms;ad_username;ad_password'
       sudo docker restart vpn

Once it's up other containers can be started using it's network connection:

       sudo docker run -it --net=container:vpn -d some/docker-container

More details can be found for the docker container via <https://github.com/dperson/openvpn-client/blob/master/README.md>
