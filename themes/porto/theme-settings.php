<?php
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Theme\ThemeSettings;
use Drupal\system\Form\ThemeSettingsForm;
use Drupal\Core\Form;

function porto_form_system_theme_settings_alter(&$form, Drupal\Core\Form\FormStateInterface $form_state) {
    // ----------- DESIGN -----------
    $form['options']['design'] = array(
        '#type' => 'fieldset',
        '#title' => 'Design',
    );
    // Skins
    $form['options']['design']['skin'] = array(
        '#type' => 'fieldset',
        '#title' => '<div class="plus"></div><h3 class="options_heading">Skins</h3>',
    );

    $form['options']['design']['skin']['skin_option'] = array(
        '#type' => 'select',
        '#title' => 'Select a Skin Style:',
        '#default_value' => theme_get_setting('skin_option'),
        '#options' => array(
            'none' => 'None',
            'default' => 'Default',
            'skin-corporate-3' => 'Corporate 3',
            'skin-corporate-4' => 'Corporate 4',
            'skin-corporate-5' => 'Corporate 5',
            'skin-corporate-6' => 'Corporate 6',
            'skin-corporate-7' => 'Corporate 7',
            'skin-corporate-8' => 'Corporate 8',
            'custom' => 'Custom color',
        ),
    );
    $form['options']['design']['skin']['custom_color'] = array(
        '#type' => 'textfield',
        '#title' => 'Enter code color',
        '#description' => 'Example : #ccc . Get code color at link : https://www.w3schools.com/colors/colors_hex.asp',
        '#default_value' => theme_get_setting('custom_color'),
        '#states' => array (
            'visible' => array(
                'select[name = skin_option]' => array('value' => 'custom')
            )
        )
    );
    $form['options']['design']['your_css'] = array(
        '#type' => 'textarea',
        '#title' => 'Add Your Css',
        '#default_value' => theme_get_setting('your_css'),
    );

}