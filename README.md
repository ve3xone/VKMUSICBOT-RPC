### Инструкция

1. [Скачайте](https://github.com/WILDDIP/VKMUSICBOT-RPC/releases "Скачайте") последнюю версию

2. Укажите свой ID вконтакте в `user_id.txt`

3. Получите токен

4. Скопируйте [токен](#получение-токена "токен")

5. Вставьте токен в `token.txt`

6. Запустите `start_vk_music_status.bat`

#### Получение токена
###### Первый способ:
1. Переходим по [ссылке](https://oauth.vk.com/authorize?client_id=6829848&scope=status&response_type=token&v=5.92 "ссылке")
2. Копируем токен (&access_token=**00000**&expires...)

###### Второй способ:
1. [Создаём](https://vk.com/editapp?act=create "Создаём") приложение ВК (Выбираем **Standalone-приложение**)

2. Идём в **Настройки**, потом копируем **ID приложения**
![Настройки >> ID](https://i.imgur.com/FcrG3X1.png "Настройки >> ID")

3. Переходим по ссылке, вставляя ID вместо *0000000*
>oauth.vk.com/authorizeclient_id=**0000000**&scope=status&response_type=token&v=5.92

4. Копируем токен (&access_token=**00000**&expires...)

