---
id: setup-redsys-tpv
title: Redsys TPV setup
---

When you register **TPV Virtual** in your acquiring bank you will receive the following information:

- **Merchant code**
- **Terminal**
- **Secret key (SHA256)**

Enter those values in [MONEI Dashboard](https://dashboard.monei.com/settings/payment-methods/card) to connect your TPV Virtual.

:::caution
In order for your TPV Virtual to work properly with MONEI you need to configure it as explained below.
:::

Along with the credentials your bank should provide you access to the [canales.redsys.es](https://canales.redsys.es/). If you don't have access you can always ask your bank to send it to you or ask them to update TPV configurations for you.

![Redsys TPV setup for MONEI step 1](/img/configure-redsys-0.jpg)

1. In [canales.redsys.es](https://canales.redsys.es/) go to **Comercio**
2. Search for your **Merchant code**
3. Click on the eye icon

![Redsys TPV setup for MONEI step 2](/img/configure-redsys-1.jpg)

1. Click on **Modificar**
2. Enter configurations exactly like on the screenshot
3. Click on **Guardar cambios**

You can use [Pay By Link](https://support.monei.com/hc/en-us/articles/360017813357-How-to-create-a-manual-payment-with-Pay-By-Link) to test that everything works as expected.
