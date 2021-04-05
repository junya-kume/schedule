# スケジュール管理アプリケーション

# 概要
スケジュールを管理するアプリケーションです。  
予定入力画面にて「タイトル」「日付」「内容」を入力して送信を行うと予定が登録されます。

# 本番環境
http://35.73.88.191/  
テストID：test@hoge  
テストPASS：111111

# 制作背景(意図)						
自分の予定を確認

# DEMO			
![schedule](https://user-images.githubusercontent.com/78408601/113535422-58e45680-960e-11eb-901e-cbc1578fbf47.gif)

# 工夫したポイント
カレンダーのレイアウトを上手く実装できなかったので何か良い方法が無いか調べた所、  
「Simple_calendar」というgemに行き着き実装することができました。

# 使用技術(開発環境)
Rails 6.0.3.6  
ruby 2.6.5p114 (2019-10-01 revision 67812) [x86_64-darwin20]

# 課題や今後実装したい機能
自分の予定しか見れないので、任意のユーザーの予定を見れるようにしたいです。

# DB設計
・usersテーブル
| Column   | Text   | Option     |
| -------- | ------ | ---------- |
| nickname | string | null:false |
| email    | string | null:false | 

・schedulesテーブル
| Column     | Text       | Option            |
| ---------- | ---------- | ----------------- |
| title      | string     | null:false        |
| content    | string     | null:false        |
| start_time | date       | null:false        |
| user_id    | references | foreign_key: true |
