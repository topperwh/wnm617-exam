package com.gussingrenewable.topper.helloandroid;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import org.w3c.dom.Text;

public class MainActivity extends AppCompatActivity {

    //step:1 Declaration
    Button sqButton;
    EditText inputBox1;
    double x;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // step:2 Combine
        sqButton = (Button) findViewById(R.id.button);
        inputBox1 = (EditText) findViewById(R.id.editText);


        // step:3 Do something
        sqButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                x = Integer.parseInt(inputBox1.getText().toString());
                System.out.printf("sqrt(%.3f) is %.3f%n", x, Math.sqrt(x));
            }
        });


    }
}
