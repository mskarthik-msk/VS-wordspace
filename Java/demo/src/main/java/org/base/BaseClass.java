package org.base;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
//import java.security.Key;
import java.text.SimpleDateFormat;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.bouncycastle.oer.Switch;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {

	public static WebDriver driver;

	/******************** * * DRIVER LAUNCH * * ***********************/

	public static WebDriver browserStart(String browseroption) {

//		if(browseroption.equals("chrome")) {
//			WebDriverManager.chromedriver().setup();
//				driver=new ChromeDriver();
//		}
//		else if(browseroption.equals("firefox")) {
//			WebDriverManager.firefoxdriver().setup();
//				driver=new FirefoxDriver();
//		}
//		else if(browseroption.equalsIgnoreCase("edge")) {
//			WebDriverManager.edgedriver().setup();
//				driver=new EdgeDriver();
//		}

		switch (browseroption) {
		case ("chrome"):
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
			break;
		case ("firefox"):
			WebDriverManager.firefoxdriver().setup();
			driver = new ChromeDriver();
			break;
		case ("edge"):
			WebDriverManager.edgedriver().setup();
			driver = new ChromeDriver();
			break;
		default:
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		}

		return driver;
	}

	public static void quit() {
		driver.quit();
	}

	/******************* * * GET URL & IMPLICITLY WAIT * * ***********************/

	public static void urlTimes(String url, long sect) {

		driver.manage().window().maximize();
		driver.get(url);
		driver.manage().timeouts().implicitlyWait(sect, TimeUnit.SECONDS);
	}

	public static void waits(long sect) {
		driver.manage().timeouts().implicitlyWait(sect, TimeUnit.SECONDS);
	}

	public static void sleep(long s) throws InterruptedException {
		Thread.sleep(s);
	}

	/******************** * * GET TITLE & CURRENT URL * * ***********************/

	public static String Title() {

		String title = driver.getTitle();
		return title;
	}

	public static String currentUrl() {

		String currentUrl = driver.getCurrentUrl();
		return currentUrl;
	}

	/******************** * * SENDKEYS * * ***********************/

	public static void keyData(WebElement e, String s) {

		e.sendKeys(s);
	}

	/************************* * * ACTIONS @OBJECT* * *************************/

	public static void acts(String wrk, WebElement e) {

		Actions a = new Actions(driver);

		if (wrk.equals("moveto")) {
			a.moveToElement(e).perform();
		} else if (wrk.equals("Double")) {
			a.doubleClick(e).perform();
		} else if (wrk.equals("right")) {
			a.contextClick(e).perform();
		} else if (wrk.equals("hold")) {
			a.clickAndHold(e).perform();
		} else if (wrk.equals("releasse")) {
			a.release(e).perform();
		} else if (wrk.equals("click")) {
			a.click(e).perform();
		} else {
			a.click(e).perform();
		}
	}

	public static void actDrag(WebElement e, WebElement t) {
		Actions a = new Actions(driver);

		a.dragAndDrop(e, t).perform();
	}

	/********************
	 * * * ALERT @USEING SWITCH TO IN @OBJECT ) * *
	 *******************/

	public static String alart(String s) {

		String text = null;
		Alert a = driver.switchTo().alert();

		if (s.equals("yes")) {
			a.accept();
		} else if (s.equals("no")) {
			a.dismiss();
		} else if (s.equals("get")) {
			text = a.getText();
		} else {
			a.accept();
		}
		return text;
	}

	public static void alartKey(String s) {
		Alert a = driver.switchTo().alert();

		a.sendKeys(s);
	}

	/*************************
	 * * * FRAMES @USING SWITCH TO * *
	 **************************/

//	SWITCH FRAME

	public static void frame(String s) {

		driver.switchTo().frame(s);
	}

//	SWITCH PARENT,  DEFAULT

	public static void frameTo(String s) {

		if (s.equals("parent")) {
			driver.switchTo().parentFrame();
		} else if (s.equals("default")) {
			driver.switchTo().defaultContent();
		}
	}

	/************************* * * SELECT * * **************************/

//	SELECT & DIS_SELECT BY INDEX

	public static void selectByInd(WebElement e, String opt, int v) {

		Select s = new Select(e);

		if (opt.equals("ind")) {
			s.selectByIndex(v);
		} else if (opt.equals("dind")) {
			s.deselectByIndex(v);
		}
	}

//	SELECT & DIS_SELECT BY VALUE

	public static void selectByTxt(WebElement e, String opt, String v) {

		Select s = new Select(e);

		if (opt.equals("val")) {
			s.selectByValue(v);
		} else if (opt.equals("dval")) {
			s.deselectByValue(v);
		}
	}

//	SELECT & DIS_SELECT BY VALUE

	public static void SelectByVal(WebElement e, String opt, String v) {

		Select s = new Select(e);

		if (opt.equals("txt")) {
			s.selectByVisibleText(v);
		} else if (opt.equals("dtxt")) {
			s.deselectByVisibleText(v);
		}
	}

//	SELECT ALL   DESELECT ALL    ////////////////////////////////////////////////////////////////////////

	public static void selectAll(WebElement e, String ops) {

		Select s = new Select(e);
		if (ops.equals("select")) {
			java.util.List<WebElement> options = s.getOptions();
			for (int i = 0; i < options.size(); i++) {
				s.selectByIndex(i);
			}
		} else if (ops.equals("deselect")) {
			s.deselectAll();
		}
	}

//	GET_1st_OPTIONS,  GET_OPTIONS,  GET_ALL_SELECTED

	public static String gatSelect(WebElement e, String opt) {

		String text = null;
		Select s = new Select(e);

		if (opt.equals("getFirstSelect")) {
			text = s.getFirstSelectedOption().getText();
		} else if (opt.equals("getOptions")) {
			java.util.List<WebElement> options = s.getOptions();
			for (int i = 0; i < options.size(); i++) {
				text = options.get(i).getText();
			}
		} else if (opt.equals("getAllSellect")) {
			java.util.List<WebElement> allSelected = s.getAllSelectedOptions();
			for (int i = 0; i < allSelected.size(); i++) {
				text = allSelected.get(i).getText();
			}
		}
		return text;
	}

//	IS_MULTIPLE

	public static boolean isMulti(WebElement e) {

		Select s = new Select(e);
		return s.isMultiple();
	}

	/********************** * * TAKE SCREENSHOT * * ********************/

	public static void sShot(String filename) throws IOException {

		TakesScreenshot tk = (TakesScreenshot) driver;
		File src = tk.getScreenshotAs(OutputType.FILE);
		File dec = new File(System.getProperty("user.dir") + "\\src\\test\\resources\\SShot\\" + filename + "_"
				+ System.currentTimeMillis() + ".png");
		FileUtils.copyFile(src, dec);
	}

	/************************ * * JAVA SCRIPT * * **********************/

//	JS SENDKEY

	public static void jsSet(WebElement e, String s) {

		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('value','" + s + "')", e);

	}

//	JS GET, CLICK, DOWN, UP

	public static String jsExe(String s, WebElement e) {

		String text = null;

		JavascriptExecutor js = (JavascriptExecutor) driver;

		if (s.equals("get")) {
			text = js.executeScript("return arguments[0].getAttribute('value')", e).toString();
		} else if (s.equals("click")) {
			js.executeScript("argument[0].click()", e);
		} else if (s.equals("down")) {
			js.executeScript("argument[0].scrollIntoView(true)", e);
		} else if (s.equals("up")) {
			js.executeScript("argument[0].scrollIntoView(false)", e);
		}
		return text;
	}

	/********************** * * WINDOW HANDLE * * ************************/

	public static void windHand(int p) {

//		String wind = driver.getWindowHandle();
		Set<String> winds = driver.getWindowHandles();

		int page = 1;
		for (String each : winds) {
			if (page == p) {
				driver.switchTo().window(each);
			}
			page++;
		}

//		List<String> li =new LinkedList();
//		li.addAll(winds);
//		String s=li.get(2);
//		driver.switchTo().window(s);

	}

	/*********************** * * NAVIGATION * * *************************/

	public static void naviTo(String st) {

		driver.navigate().to(st);

	}

	public static void navi(String st) {

		if (st.equals("back")) {
			driver.navigate().back();
		} else if (st.equals("refresh")) {
			driver.navigate().refresh();
		} else if (st.equals("forward")) {
			driver.navigate().forward();
		}
	}

	/*******************
	 * * * EXCEL_READ_WITH_TYPE * * @throws IOException
	 *********************/

	public static String excelRead(String filename, String sheetname, int row, int cell) throws IOException {

		String value = null;

		File xr = new File(System.getProperty("user.dir") + "\\src\\test\\resources\\DataBase\\" + filename + ".xlsx");

		FileInputStream to = new FileInputStream(xr); // change to byte code
		Workbook wb = new XSSFWorkbook(to);
		Sheet s = wb.getSheet(sheetname);
		Row r = s.getRow(row);
		Cell c = r.getCell(cell);

		int type = c.getCellType();

		if (type == 1) {
			value = c.getStringCellValue();
		} else {
			if (DateUtil.isCellDateFormatted(c)) {
				SimpleDateFormat sd = new SimpleDateFormat("dd-MM-yyyy");
				value = sd.format(c.getDateCellValue());
			} else {
				long num = (long) c.getNumericCellValue();
				value = String.valueOf(num);
			}

		}
		return value;
	}

	/*********************** * * EXCEL_UPDATE * * *************************/

	public static void excelUpdate(String filename, String sheetname, int row, int cell, String value)
			throws IOException {

		File xr = new File(System.getProperty("user.dir") + "\\src\\test\\resources\\DataBase\\" + filename + ".xlsx");

		FileInputStream to = new FileInputStream(xr); // change to byte code
		Workbook wb = new XSSFWorkbook(to);
		Sheet s = wb.getSheet(sheetname);
		Row r = s.getRow(row);
		Cell c = r.getCell(cell);

		c.setCellValue(value);

		FileOutputStream ot = new FileOutputStream(xr); // change to source code

		wb.write(ot);

	}

	/*********************** * * EXCEL_CREATE * * *************************/

	public static void excelCreate(String filename, String sheetname, int row, int cell, String value)
			throws IOException {

		File xr = new File(System.getProperty("user.dir") + "\\src\\test\\resources\\DataBase\\" + filename + ".xlsx");

		Workbook wb = new XSSFWorkbook();
		Sheet s = wb.createSheet(sheetname);
		Row r = s.createRow(row);
		Cell c = r.createCell(cell);

		c.setCellValue(value);

		FileOutputStream ot = new FileOutputStream(xr); // change to source code

		wb.write(ot);
	}

	/*********************** * * CALENDER_HANDLING * * *************************/

	public static void calender(int date, String month, int year, WebElement calen, WebElement forword,
			WebElement back) {

		Map<String, Integer> mp = new LinkedHashMap<>();
		mp.put("January", 1);
		mp.put("February", 2);
		mp.put("March", 3);
		mp.put("April", 4);
		mp.put("May", 5);
		mp.put("June", 6);
		mp.put("July", 7);
		mp.put("August", 8);
		mp.put("September", 9);
		mp.put("October", 10);
		mp.put("November", 11);
		mp.put("December", 12);

		while (true) {
			WebElement calend = calen;
			String[] split = calend.getTagName().split(" ");
			String mon = split[0];

			String yer = split[1];
			int yr = Integer.parseInt(yer);
			if (year == yr && month.equalsIgnoreCase(mon)) {
				break;
			}

			else if (year > yr) {
				forword.click();
				Set<Entry<String, Integer>> ex = mp.entrySet();
				for (Entry<String, Integer> x : ex) {
					mon.equalsIgnoreCase(x.getKey());
					Integer val = x.getValue();

				}
			}
		}
	}

	/*********************** * * CALENDER_FORWARD * * *************************/

	public static void calenderFore(String date, String month, String year, WebElement calen, WebElement button) {

		while (true) {
			WebElement calend = calen;
			String[] split = calend.getText().split(" ");
			String mon = split[0];
			String yer = split[1];
			if (year.equalsIgnoreCase(yer) && month.equalsIgnoreCase(mon)) {
				break;
			} else {
				button.click();
//				driver.findElement(By.xpath("//span[text()='Next']")).click();
			}
		}

		List<WebElement> dates = driver
				.findElements(By.xpath("//table[@class='ui-datepicker-calendar']/tbody/tr/td/a"));

		for (WebElement x : dates) {
			String text = x.getText();
			if (date.equalsIgnoreCase(text)) {
				x.click();
			}
		}
	}

	/*********************** * * CALENDER_OPRATION* * *************************/

	public static void calender(String date, String month, int year) {
		driver.findElement(By.xpath("//*[@id=\"datepicker1\"]")).click();

		while (true) {

			Map<String, Integer> mp = new LinkedHashMap<>();
			mp.put("January", 1);
			mp.put("February", 2);
			mp.put("March", 3);
			mp.put("April", 4);
			mp.put("May", 5);
			mp.put("June", 6);
			mp.put("July", 7);
			mp.put("August", 8);
			mp.put("September", 9);
			mp.put("October", 10);
			mp.put("November", 11);
			mp.put("December", 12);

			WebElement calend = driver.findElement(By.xpath("//div[@class='ui-datepicker-title']"));

			String[] split = calend.getText().split(" ");

			int currentYer = Integer.parseInt(split[1]);
			int currentMonth = mp.get(split[0]);

			int targetMonth = mp.get(month);

			if (currentYer == year && currentMonth == targetMonth) {
				break;
			}

			if (currentYer < year || (currentYer == year && currentMonth < targetMonth)) {
				driver.findElement(By.xpath("//span[text()='Next']")).click();
			}

			else {
				driver.findElement(By.xpath("//span[text()='Prev']")).click();
			}
		}

		List<WebElement> dates = driver
				.findElements(By.xpath("//table[@class='ui-datepicker-calendar']/tbody/tr/td/a"));

		for (WebElement d : dates) {
			if (d.getText().equals(date)) {
				d.click();
			}
		}

	}

}