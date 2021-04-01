# usersテーブル
| Column   | Text   | Option     |
| -------- | ------ | ---------- |
| nickname | string | null:false |
| email    | string | null:false | 

# schedulesテーブル
| Column     | Text       | Option            |
| ---------- | ---------- | ----------------- |
| title      | string     | null:false        |
| content    | string     | null:false        |
| start_time | date       | null:false        |
| user_id    | references | foreign_key: true |