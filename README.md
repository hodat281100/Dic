<h1 style="text-align: center"> DICTIONARY 2 </h1>

# THÔNG TIN CSDL

**Vocabulary**

> id => uuid
>
> vn => string
>
> en => string
>
> active => boolean
>
> createdAt => date
>
> updatedAt => date

<br></br>

# CÁC GIAI ĐOẠN

## **GIAI ĐOẠN 0**

> Xây dựng Component

<br></br>

## **GIAI ĐOẠN 1**

> Xây dựng Vocabulary _(Home page)_ gồm **`form nhập liệu`** và **`danh sách hiển thị từ vựng`** (từ tiếng anh + nghĩa tiếng việt)

### **_Thông tin UI:_**

#### **1 `FORM` nhập liệu gồm:**

-   1 `INPUT` nhập liệu tên tiếng anh
-   1 `INPUT` nhập liệu tên tiếng việt
-   1 `BUTTON` có chức năng thêm
-   1 `BUTTON` có chức năng xóa trắng khi đã có ký tự trong ô nhập liệu (focus lại vào INPUT tên tiếng anh)

#### **Chức năng**

-   Tìm kiếm từ vựng khi gõ trong INPUT
-   Chỉ cho phép thêm từ mới nếu chưa có từ đó trong danh sách
-   Khi **`KHÔNG`** có từ nào tìm kiếm được thì hiển thị dưới nền hình ảnh hoặc từ _"`cho phép` thêm"_ và BUTTON thêm sáng lên (enable)

<br>

### **_Danh sách hiển thị các từ vựng_**

#### **Kiểu hiển thị**

-   Hiển thị gồm 2 phần: Tiếng Anh _(sát bên trái)_ và Tiếng Việt _(sát bên phải)_

#### **Ở màn hình PC:**

-   Khi hover lên 1 dòng sẽ hiển thị 2 nút bên phải dòng đó cho phép sửa hoặc xóa từ vựng đó

#### **Ở màn hình Mobile:**

-   Hiển thị sẵn các nút

#### **Chức năng**

> Cho phép **`sửa`** hoặc **`xóa`** các từ trong danh sách bằng cách **`chọn nhiều`**

##### **_Xóa_**

-   Khi yêu cầu xóa sẽ hiển thị hộp thoại nhắc nhở
-   Tạm thời sẽ disabled trong csdl

##### **_Sửa_**

-   Khi yêu cầu sửa sẽ cho phép hiển thị INPUT tại ngay chính dòng đó để sửa lại cả từ vựng tiếng anh và tiếng việt kèm theo 1 Button Submit và 1 Button Cancle

<br></br>

## **GIAI ĐOẠN 2**

> Xây dựng backend bằng **`json_server`**

<br></br>

## **GIAI ĐOẠN 3**

> Xây dựng chức năng cho phép **`Thêm các từ vào bài test`**

<br></br>

## **GIAI ĐOẠN 4**

> Xây dựng chức năng **`TEST`** _(Test page)_ bằng danh sách (tĩnh) các từ vựng => random câu hỏi, câu trả lời
>
> Hình thứ test: **`TRẮC NGHIỆM`**

<br></br>

# ROUTE/PAGE

-   vocabulary (home page) => Render `VocabularyList` and `VocabularyForm`
-   test => choose vocabularies to test

<br></br>

# COMPONENT

-   Button
-   ButtonIcon
-   Input
-   VocabularyItem
-   TestItem
-   List (render in children)
-   Toast

<br></br>

# HOOK

-   useFetch(API)
-   useArray(array)
-   useLocalStorage(KEY)

<br></br>

# PACKAGE

**font-end**

-   axios
-   styled-components
-   query-string
-   react-router-dom
-   @material-ui/icons
-   redux-toolkit (save vocabulary when first load)
-   react-hook-form

**back-end**

-   json_server
-   nodemon
-   cors

<br></br>

## _CẤU TRÚC THƯ MỤC **`src`**_

-   hooks
-   components
-   pages
-   assets

<br></br>

## _CHỨC NĂNG DỰ ĐỊNH_

-   Thêm loại từ + Chia theo họ từ
-   Thêm speaking
-   Thêm các hình thức test khác
