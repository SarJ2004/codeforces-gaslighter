const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://codeforces.com/");
  await page.click('a[href="/enter?back=%2F"]');
  await new Promise((r) => setTimeout(r, 1000));

  await page.type("#handleOrEmail", "username");
  await new Promise((r) => setTimeout(r, 2000));
  await page.type("#password", "password");
  await page.click(".submit");

  // await page.focus(".notice");
  // await page.waitForSelector(".handleBox");
  // await page.type(".handleBox", "rishijha00007");
  // await page.click(
  //   "#sidebar > div:nth-child(9) > form > div:nth-child(3) > input[type=submit]"
  // );
  await new Promise((r) => setTimeout(r, 4000));
  console.log("after waiting");
  while (true) {
    await page.click('a[href="/problemset"]');
    await new Promise((r) => setTimeout(r, 2000));
    // await page.screenshot("initial.png");
    const checkboxSelector = "#change-hide-solved-status";
    await page.evaluate(() => {
      const box = document.querySelector("#change-hide-solved-status");
      if (!box.checked) {
        box.click();
      }
    }, checkboxSelector);
    // await page.evaluate((res) => {
    //   if(!res)
    //     {
    //       const box = document.querySelector("#change-hide-solved-status");

    //     }
    // }, res);
    await new Promise((r) => setTimeout(r, 5000));

    await page.click(
      "#pageContent > div.datatable > div:nth-child(6) > table > tbody > tr:nth-child(2) > td.dark.right > a"
    );
    await new Promise((r) => setTimeout(r, 2000));
    // await page.click("#verdictName");
    // await new Promise((r) => setTimeout(r, 500));
    await page.waitForSelector("#verdictName");

    await page.click("#verdictName");
    await new Promise((r) => setTimeout(r, 1000));
    // await page.click("#verdictName > option:nth-child(2)");
    await page.evaluate(() => {
      const option = document.querySelector("#verdictName");
      option.value = "OK";
    });
    await page.waitForSelector("#programTypeForInvoker");

    await page.click("#programTypeForInvoker");
    await new Promise((r) => setTimeout(r, 1000));
    // await page.click("#verdictName > option:nth-child(2)");
    await page.evaluate(() => {
      const option = document.querySelector("#programTypeForInvoker");
      option.value = "cpp.g++17";
    });
    await new Promise((r) => setTimeout(r, 500));
    await page.click(
      "#sidebar > div > div:nth-child(3) > form > div:nth-child(4) > input[type=submit]:nth-child(1)"
    );
    await new Promise((r) => setTimeout(r, 2000));
    // await page.click(
    //   "#pageContent > div.datatable > div:nth-child(6) > table > tbody > tr:nth-child(2) > td.id-cell.dark.left > a"
    // );
    // #pageContent > div:nth-child(21) > div > ul > li:nth-child(7)
    await page.waitForSelector(".pagination>ul>li:last-child");
    await new Promise((r) => setTimeout(r, 1000));

    await page.click(".pagination>ul>li:last-child");
    await new Promise((r) => setTimeout(r, 2000));
    await page.click(
      "#pageContent > div.datatable > div:nth-child(6) > table > tbody > tr:nth-child(2) > td.id-cell.dark.left > a"
    );
    await page.waitForSelector("#facebox > div > div > div > span > a");
    await new Promise((r) => setTimeout(r, 2000));
    await page.click("#facebox > div > div > div > span > a");
    await new Promise((r) => setTimeout(r, 2000));
    await page.click(".source-copier");
    await new Promise((r) => setTimeout(r, 500));
    await page.waitForSelector(
      "#pageContent > div.datatable > div:nth-child(6) > table > tbody > tr:nth-child(2) > td:nth-child(3) > a"
    );
    await new Promise((r) => setTimeout(r, 1000));

    await page.click(
      "#pageContent > div.datatable > div:nth-child(6) > table > tbody > tr:nth-child(2) > td:nth-child(3) > a"
    );
    await page.click(
      "#pageContent > div.datatable > div:nth-child(6) > table > tbody > tr:nth-child(2) > td:nth-child(3) > a"
    );
    await new Promise((r) => setTimeout(r, 500));
    let quesNum = await page.evaluate(() => {
      let currentUrl = window.location.href;
      let lastChar = currentUrl.charAt(currentUrl.length - 1);
      return lastChar;
    });
    console.log(quesNum);
    await new Promise((r) => setTimeout(r, 8000));
    await page.click(
      "#pageContent > div.second-level-menu > ul > li:nth-child(3) > a"
    );
    await new Promise((r) => setTimeout(r, 3000));
    await page.click(
      "#pageContent > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > label > select"
    );
    await new Promise((r) => setTimeout(r, 1000));
    await page.evaluate((quesNum) => {
      const option = document.querySelector(
        "#pageContent > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > label > select"
      );
      option.value = quesNum;
    }, quesNum);
    await page.waitForSelector(
      "#pageContent > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > select"
    );
    await page.evaluate(() => {
      const option = document.querySelector(
        "#pageContent > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > select"
      );
      option.value = "54";
    });
    await new Promise((r) => setTimeout(r, 1000));

    await page.click("#editor > div.ace_scroller > div");
    await page.click("#editor > div.ace_scroller > div");
    await page.keyboard.down("Control");
    await page.keyboard.press("V");
    await page.keyboard.up("Control");
    await new Promise((r) => setTimeout(r, 1000));
    await page.click("#singlePageSubmitButton");
    await new Promise((r) => setTimeout(r, 5000));
  }
})();
