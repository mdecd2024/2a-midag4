var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://mdecd2024.github.io/2a-midag4/content \n 網誌:  https://mdecd2024.github.io/2a-midag4/blog \n 簡報:  https://mdecd2024.github.io/2a-midag4/reveal \n 倉儲:  https://github.com/mdecd2024/2a-midag4 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Latax翻譯影片重點整理', 'text': '摘要: 積分控制器的輸出信號可消除穩態誤差，但可能導致系統響應惡化。 積分項的輸出信號定義為 方程式。系統需線性化以處理非線性問題。 PID控制器的調整過程包括使用初始值、 調整KD值以獲得適當的增益值。 結論: 涉及控制系統中的積分控制、 系統線性化和PID控制器的調整穩定自然不穩定或半穩定系統的 性能限制在於需要對狀態進行調整，這與理論期望有所不同。 控制器的設計和輸入是穩定系統 的限制因素，需要考慮調整狀態、控制器設計和輸入。 對於球平衡平台，調整狀態是通過伺服馬達實現的， 控制器依賴於輸入，而輸入可以是各種參 數如溫度、壓力、速度等。 # 論文二：A real time control system for balancing a ball on a platform with FPGA parallel implementation 摘要: 提出了一個基於PID調節器的新解決方案， 用於實時平衡平台上球的位置調節。通過FPGA實 現PID調節器，提高了對球位置調節的準確性。 使用平行計算在FPGA上實現PID調節器，提高 系統速度和功率， 通過自然模擬證實了在平台上平衡球位置的準確性。 結論 提出了基於PID調節器的新解決方案， 用於實時平衡平台上球的位置調節。通過自然模擬證實 了在平台上調節球位置的增加準確性， 這些設計可用於實時控制具有多個受控參數的高速物 體。 # 論文三：Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach 摘要: 本文介紹了在平板上平衡球的控制策略。通過三種穩定結構： PD控制器、全狀態反饋和狀態 觀測器與狀態反饋。使用Kinetis K60數字信號控制器進行實驗驗證， 通過線性化策略實現系統穩定，三種結構均使用極點配置方法設。 通過實驗和模擬比較結果，展示了最佳結構的性能， 這些控制策略對於平衡球在平板上的穩定具有重要意義。 結論: 本文介紹了在平板上平衡球的控制策略， 通過三種穩定結構的實驗驗證和比較，展示了最佳結 構的性能。並且通過線性化策略實現系統的穩定。 通過實驗和模擬比較結果，證明了控制器能 夠實現預期的目標，並且能夠追踪球的位置。 # 論文四：Design and Implementation a Ball Balancing System for Control Theory Course 摘要: 設計目的：開發一個球平衡系統，用於控制理論課程， 學生可學習PID控制基礎。 原型：三個原型比較，最終模型使用木材，3D打印， Arduino控制。 控制算法：使用PID控制，實時調整梁角度以保持球平衡。 MATLAB實時數據： 介面程式可在MATLAB中繪製球位置曲線。 實驗：不同球體實驗結果，PID係數調整。 結論: 球平衡系統旨在教育控制理論應用，讓學生應用PID控制原則。 該系統涉及經典控制系統組 件，並作為閉環反饋理論的實踐平台。總的來說， 梁上的球系統有效展示了反饋控制算法。 # 論文五：Ball on the plate balancing control system 摘要: 本文描述了一個球平衡實驗室測試台的設計， 使用步進馬達和位置傳感器來改變平台傾斜角度。 控制系統包括PID控制器， 。實驗結果表明控制系統能夠成功維持球的位置穩定。 結論: 本文描述了一個球平衡實驗室測試台的設計， 可用於測試穩定和平衡控制算法， 。使用AVR微控制器的控制系統追蹤球在電阻觸摸屏上的位置， 並計算位置誤差，即球相對於 電阻玻璃中心點的位移。 此實驗室測試台配備了步進馬達和位置傳感器， 以改變平台的傾斜角度，並具有PID控制器， 能夠維持球在電阻屏幕中心點。 # 論文六：2D Ball Balancer Control using QUARC 摘要: 使用頭頂攝影機讀取球的位置， 控制器可檢測球的位置並輸出平面位置，考慮內迴路控制器設 計、模擬PID步階響應、調整伺服負載齒輪以保持球的位置、 設置步階振幅並觀察反應。這份 教師手冊涵蓋了2D Ball Balancer實驗室的相關內容，包括模型建立、 控制器設計和實驗操作。 結論: 通過調整風扇參數，可以滿足穩態誤差、定態時間和超調量規格。 伺服角度在30.0度限制內，並且風扇參數調整良好， 不會導致不穩定或不良影響。X- Y圖表顯示預期和模擬位置幾乎完全重合， 並且在實際設備中兩個軸之間存在一定的耦合。', 'tags': '', 'url': 'Latax翻譯影片重點整理.html'}, {'title': '小組影片', 'text': '41123102 上課影片製作 \n 41123111 上課影片製作 \n 41123114 上課影片製作 \n 41123117 上課影片製作 \n 41123126 上課影片製作 \n 41123128 上課影片製作 \n 41123115 上課影片製作 \n 41123107 影片字幕製作 \n', 'tags': '', 'url': '小組影片.html'}, {'title': '平衡球零件', 'text': '繪圖檔案連結 \n nxopen 使用前要檢查nx裡面的python版本是否正確 \n 老師的詳細教學影片: \n https://www.youtube.com/watch?v=Cy3j6n0a9wQ&t=241s \n', 'tags': '', 'url': '平衡球零件.html'}, {'title': 'w12任務', 'text': '\n \n \n 任務一:  繪圖檔案連結 \n 任務二: 將分組倉儲設為評分網站子模組 g4 的子模組指令為: \n git submodule add https://github.com/mdecd2024/2a-midag4 g4 \n 任務三:  \n', 'tags': '', 'url': 'w12任務.html'}, {'title': 'odoo 討論', 'text': '\n 繪圖檔案連結 \n', 'tags': '', 'url': 'odoo 討論.html'}, {'title': '網際綜合球類競賽機器人協同設計與模擬', 'text': '零件檔: 新增資料夾 \n \n \n', 'tags': '', 'url': '網際綜合球類競賽機器人協同設計與模擬.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n \n \n', 'tags': '', 'url': 'Brython.html'}]};