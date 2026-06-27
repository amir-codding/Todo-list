// گرفتن عناصر از DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const tasksList = document.getElementById('tasksList');

// آرایه برای ذخیره کارها (برای استفاده بعدی)
let tasks = [];

// تابع برای اضافه کردن کار جدید
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('لطفا یک کار بنویسید!');
        return;
    }
    
    // ایجاد شیء کار
    const task = {
        id: Date.now(),
        text: taskText,
        createdAt: new Date().toLocaleString('fa-IR')
    };
    
    // اضافه کردن به آرایه
    tasks.push(task);
    
    // نمایش در صفحه
    renderTask(task);
    
    // خالی کردن input
    taskInput.value = '';
    taskInput.focus();
}

// تابع برای نمایش یک کار در صفحه
function renderTask(task) {
    // ساخت المان li
    const li = document.createElement('li');
    li.className = 'task-item';
    li.setAttribute('data-id', task.id);
    
    // متن کار
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;
    
    // دکمه انجام دادم
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'انجام دادم';
    deleteBtn.className = 'delete-btn';
    
    // رویداد کلیک روی دکمه انجام دادم
    deleteBtn.onclick = function() {
        // انیمیشن حذف
        li.style.transform = 'scale(0.8)';
        li.style.opacity = '0';
        
        setTimeout(() => {
            li.remove();
            // حذف از آرایه
            tasks = tasks.filter(t => t.id !== task.id);
        }, 200);
    };
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    tasksList.appendChild(li);
}

// اضافه کردن کار با کلیک دکمه
addBtn.addEventListener('click', addTask);

// اضافه کردن کار با فشردن کلید Enter
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// پیام خوش‌آمدگویی در کنسول (اختیاری)
console.log('✅ To-Do List آماده است!');