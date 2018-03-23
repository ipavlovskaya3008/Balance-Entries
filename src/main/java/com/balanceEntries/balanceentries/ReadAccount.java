package com.balanceEntries.balanceentries;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Component;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.*;

@Component
public class ReadAccount {

    public String account;
    public String tAccount;

    public Map<String, String> mapDD = new HashMap<>();
    public Set<String> listDD = new HashSet<>();

    public String readAccounts() throws FileNotFoundException, IOException {
        XSSFWorkbook workbook = new XSSFWorkbook(new FileInputStream("src/Accounts.xls"));
        XSSFSheet sheet = workbook.getSheetAt(0);

        int numOfRows = sheet.getLastRowNum();
        for (int rowNum = 1; rowNum < numOfRows; rowNum++) {

            XSSFRow row = sheet.getRow(rowNum);
             int numOfCellPerRow = row.getLastCellNum();
            for (int cellNum = 0; cellNum < numOfCellPerRow; cellNum++) {

                if (cellNum == 0) {
                    account = row.getCell(cellNum).getStringCellValue();
                } else {
                    tAccount = row.getCell(cellNum).getStringCellValue();
                }
            }
           // System.out.println(account+" : " + tAccount);
            mapDD.put(account, tAccount);
        }
        //  mapDD.forEach((k,v) -> System.out.println("key: "+k+" value:"+v));
        listDD = mapDD.keySet();
       // listDD.forEach(System.out::println);
        JSONObject jsonDD = new JSONObject();
        jsonDD.put("dropdown", listDD);
        String jsonDDString = jsonDD.toString();
      //  System.out.println(jsonDDString);
        return jsonDDString;
    }
}

