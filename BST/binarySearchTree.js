let input, tree, postorder, send, display, object;

// Html dökümanı üzerindeki gerekli yerler yakalandı
input = document.querySelector("#input");
tree = document.querySelector("#tree");
postorder = document.querySelector("#postorder");
send = document.querySelector("#send");
display = document.querySelector("#display");

class Node {
    // Bu classtan yaratılan objenin içerisinde gönderilen data obje datası olarak tanımlanır ayrıca ağaç 
    // yapısı düşünüldüğünde düğümlerin sağ ve sol dallanması olacağından yeni eklenen düğümün sağ ve sol 
    // yaprağı null'e eşitlendi
    constructor(data) {
        this.right = null;
        this.left = null;
        this.data = data;
    }
}

class BST {
    // Bu classtan türetilen ilk nesnenin root'u null'eeşitlendi çünkü elemanı olmayan ağacın root dahil hiçbir düğümü olamaz
    constructor() {
        this.root = null;
    }
    // Class'ın içerisinde bulunan bu method sayesinde eğer eklenecek düğüm ağacın ilk elemanıysa root düğümüne 
    // eklenir çünkü boş ağaçta root null'e eşittir ve if bloğu içerisindeki koşul sağlanmış olur
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        }
        // Eğer root null'e eşit değilse yani ağaçta daha önceden eklenmiş eleman varsa yeni ekleyeceğimiz 
        // düğümün kaçıncı düğüm olduğunu bilemeyiz bu yüzden class içerisindeki başka bir methodu çağırıyoruz
        else {
            this.insertNode(this.root, newNode);
        }
    }
    // Method çağırıldığında karşılaştırıla düğüm ve yeni eklenecek düğüm fonksiyondan istenir
    insertNode(currentNode, newNode) {
        // Eğer yeni düğümün datası mevcut düğümün datasından küçükse mevcut düğümün soluna ekleme işlemi gerçekleşmeli
        if (newNode.data < currentNode.data) {
            if (currentNode.left === null) {
                // if bloğu içerisindeki koşul sağlandıysa yeni düğüme en uygun yeri bulduk demektir
                currentNode.left = newNode;
            }
            else {
                // Eğer yukurıdaki koşul sağlanmadıysa demek ki daha fazla dallanma var demektir ve hiçbir 
                // şekilde ağaçta kaç düğüm olduğunu bilemeyeceğimizden methodu tekrar çağırıyoruz 
                // yeni eklenecek düğüme en uygun yeri bulmak için
                this.insertNode(currentNode.left, newNode);
            }
        }
        else {
            // Eğer yeni düğümün datası mevcut düğümün datasından büyükse mevcut düğümün sağına ekleme işlemi gerçekleşmeli
            if (currentNode.right === null) {
                currentNode.right = newNode;
            }
            else {
                // Eğer yukurıdaki koşul sağlanmadıysa demek ki daha fazla dallanma var demektir ve hiçbir 
                // şekilde ağaçta kaç düğüm olduğunu bilemeyeceğimizden methodu tekrar çağırıyoruz 
                // yeni eklenecek düğüme en uygun yeri bulmak için
                this.insertNode(currentNode.right, newNode);
            }
        }
    }
    postorder(node) {
        // Postorder mantığına göre ağaçtaki düğümleri listeleyen fonksiyon bu listeyi postorder 
        // değişkeninin value'sine yazıyoruz
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            postorder.value += node.data + " ";
        }
    }
}

// object nesnesi BST class'ı içerisinden yaratıldı
object = new BST();

// send değişkenine click event'i gerçekleştiğinde açağıdaki fonksiyon çalışır
send.addEventListener("click", () => {
    let val;
    // val değişkeni tanımlandı bu val değişkeni içerisine input değişkenin 
    // value'si number tipine çevirilerek tanımlandı
    val = Number(input.value);
    // object nesnesi içerisinde bulunan insert methoduna val değişkeni gönderildi
    object.insert(val);
    // input değişkeninin value'si temizlendi (daha güzel bir görünüm için)
    input.value = "";
    // tree değişkeninin value'sine val + "," yazıldı eklenen tüm elemanlar sırayla görünebilsin diye
    tree.value += val + ",";
});

// display değişkenine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışır
display.addEventListener("click", () => {
    // object nesnesi içerisinde yer alan postorder methoduna aynı obje içerisinde bulunan root değişkeni gönderildi
    object.postorder(object.root);
});



